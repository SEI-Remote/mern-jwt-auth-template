import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	return (
		<>
			<NavBar user={user} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}
 
export default App;