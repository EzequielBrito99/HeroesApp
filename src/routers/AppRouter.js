import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />}></Route>

        <Route path='/*' element={<DashboardRoutes />}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default AppRouter
