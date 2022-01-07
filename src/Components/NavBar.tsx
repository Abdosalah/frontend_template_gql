import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const NavBar = (props: any) => {
	// Do not render navbar on certain pages ussing the location object
	// Should create a map somewhere of where to not render the navbar
	// const location = useLocation()
	return (
		<>
			<div className="flex px-10 py-4 shadow-lg w-full">
				<div className="flex w-1/2">
					<p>Buisness Title</p>
					<p>link 1</p>
					<p>link 2</p>
					<p>link 3</p>
					<p>link 4</p>
				</div>
				<div className="flex justify-end w-1/2">
					<Link className="pr-6" to="/signup">
						Signup
					</Link>
					<Link to="/login">
						<p>Login</p>
					</Link>
				</div>
			</div>
		</>
	)
}

export default NavBar
