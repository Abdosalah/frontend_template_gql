import { useEffect } from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client'

const QUERY = gql`
	query {
		greeting
	}
`

const COMMENTS_SUBSCRIPTION = gql`
	subscription {
		messageAdded
	}
`

const Home = () => {
	// caching, fetchPolicy and updating the cache is a bit complicated! reference this repo https://github.com/uptoskill/graphql-job-board
	// also fragments are interesting
	// same here there are handler functions for when the operation is complete
	// const { loading, data } = useQuery<{ greeting: boolean }>(QUERY, {
	// 	fetchPolicy: 'no-cache',
	// })

	// There are handler functions for when we recieve the data
	// const { data: subData } = useSubscription<{ messageAdded: string }>(
	// 	COMMENTS_SUBSCRIPTION
	// )

	// This should only happen when we login
	useEffect(() => {
		localStorage.setItem(
			'auth-token',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiTVkgQVdFU09NRSBVU0VSISEiLCJpZCI6InNvbWUgaWQiLCJpYXQiOjE2MzkxNjYxODR9.-vnLeAFoAYkqc4SBWHfVf10mdYctPvc5PnizKPXUBDQ'
		)
	}, [])

	return (
		<>
		<div className="text-3xl bg-blue-300"> HERERE!!!</div>
		</>
	)
}

export default Home
