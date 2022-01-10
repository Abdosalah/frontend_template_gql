import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'
import AddACourse from './Pages/AddACourse/AddACourse'
import SideBar from './Components/SideBar'

const Routing = (props: any) => {
	return (
		<BrowserRouter>
			<div className="">
				<NavBar />
				<div className="flex w-full">
					<div id="sideBar" className="w-1/5">
						<SideBar />
					</div>
					<div id="pageComponent" className="w-4/5">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/add-a-course" element={<AddACourse />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Routing
