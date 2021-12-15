import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
	split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

import Home from './Pages/Home'

const getToken = () => localStorage.getItem('auth-token')

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = getToken()
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			...(token && { Authorization: `Bearer ${token}` }),
		},
	}
})

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
})

const wsLink = new WebSocketLink({
	uri: 'ws://localhost:4000/graphql',
	options: {
		connectionParams: () => ({
			accessToken: getToken(),
		}),
		lazy: true,
		reconnect: true,
	},
})

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query)
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	httpLink
)

const client = new ApolloClient({
	link: authLink.concat(splitLink),
	cache: new InMemoryCache(),
})

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	)
}

export default App
