import { Link } from 'react-router-dom'

const NavBar = (props: any) => (
	<>
		<div className="flex py-2 w-full bg-gray-200">
			<div className="w-1/5 flex justify-center">
				<p>Tutor Marketplace</p>
			</div>
			<div className="w-4/5 px-10 flex justify-between">
				<p>Find a course</p>
				<div className="flex">
					<Link className="pr-6" to="/signup">
						Signup
					</Link>
					<Link to="/login">
						<p>Login</p>
					</Link>
				</div>
			</div>
		</div>
	</>
)

export default NavBar
