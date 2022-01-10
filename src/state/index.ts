import { useState } from 'react'
import constate from 'constate'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
	query {
		me {
			type
			name
		}
	}
`

interface User {
	name: string
	type: string
}

export const getToken = () => localStorage.getItem('auth-token')

const useUser = () => {
	const [user, setUser] = useState<User>()

	useQuery<{ me: User }>(QUERY, {
		fetchPolicy: 'no-cache',
		onCompleted: ({ me }) => setUser(me),
	})

	return { user, setUser }
}

const [UserProvider, useUserContext] = constate(useUser)

export { UserProvider, useUserContext }
