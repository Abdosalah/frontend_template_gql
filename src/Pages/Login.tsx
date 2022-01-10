import { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { gql, useMutation } from '@apollo/client'
import { useUserContext } from '../state'

const LOGIN_QUERY = gql`
	mutation ($token: String!) {
		googleOAuth(token: $token) {
			userToken
			name
		}
	}
`

interface LoginResult {
	googleOAuth: {
		userToken: string
		name: string
	}
}

const Login = () => {
	const [userType, setUserType] = useState<'partner' | 'customer'>('customer')
	const [login, { loading, error }] = useMutation<LoginResult>(LOGIN_QUERY, {
		onCompleted: ({ googleOAuth: { name, userToken } }) => {
			setUser({
				name,
				type: userType,
			})
			localStorage.setItem('auth-token', userToken)
		},
	})

	const { setUser } = useUserContext()

	// cant fix this type issue for now
	const handleLogin = async (response: any) => {
		if (response && response.tokenId) {
			console.log('response', response)
			login({ variables: { token: response.tokenId } })
		}
	}

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
			buttonText="Continue with Google"
			onSuccess={handleLogin}
			onFailure={handleLogin}
			cookiePolicy="single_host_origin"
			render={({ onClick, disabled }: any) => (
				<button onClick={onClick}>Google Login button here!!</button>
			)}
		/>
	)
}

export default Login
