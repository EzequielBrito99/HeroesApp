import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<PublicRoute><LoginScreen /></PublicRoute>}></Route>

        <Route path='/*' element={<PrivateRoute><DashboardRoutes /></PrivateRoute>}></Route>
      </Routes>  
    </HashRouter>
  )
}

export default AppRouter
