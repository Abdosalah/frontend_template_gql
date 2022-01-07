import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'

const Routing = (props: any) => {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Routing
