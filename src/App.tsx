import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Home from './Pages/Home'

const About = () => <h1>ABOUTTTTTT!!!!!!!</h1>

const client = new ApolloClient({
	uri: 'http://localhost:3030/graphql',
	cache: new InMemoryCache(),
})

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	)
}

export default App
