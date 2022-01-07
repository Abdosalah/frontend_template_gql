import GoogleLogin, {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from 'react-google-login'
import { gql, useMutation } from '@apollo/client'

const LOGIN_QUERY = gql`
	mutation ($token: String!) {
		googleOAuth(token: $token)
	}
`

interface LoginResult {
	googleOAuth: string
}

const Login = () => {
	const [login, { loading, error }] = useMutation<LoginResult>(LOGIN_QUERY, {
		onCompleted: (data) => localStorage.setItem('auth-token', data.googleOAuth),
	})

	const handleLogin = async (googleData: any) => {
		if (googleData?.tokenId) {
			login({ variables: { token: googleData.tokenId } })
		}
	}

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
			buttonText="Log in with Google"
			onSuccess={handleLogin}
			// onFailure={handleLogin}
			cookiePolicy="single_host_origin"
		/>
	)
}

export default Login
