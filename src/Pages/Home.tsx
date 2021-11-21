import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
	query {
		health
	}
`

const Home = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { loading, error: _, data } = useQuery<{ health: boolean }>(QUERY)

	if (loading === true) {
		return <h1>LOADING!!!</h1>
	}

	return <div>HOME PAGE HERER!!! {data?.health ? 'true' : 'false'}</div>
}

export default Home
