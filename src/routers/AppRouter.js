import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PublicRoute><LoginScreen /></PublicRoute>}></Route>

        <Route path='/*' element={<PrivateRoute><DashboardRoutes /></PrivateRoute>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default AppRouter
