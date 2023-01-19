import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/hero/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path='marvel' element={<MarvelScreen />}></Route>
            <Route path='dc' element={<DcScreen />}></Route>
            <Route path='hero/:heroeId' element={<HeroScreen />}></Route>

            <Route path='search' element={<SearchScreen />}></Route>
            
            <Route path='/' element={<MarvelScreen />}></Route>
        </Routes>  
      </div>
    </>
  )
}

export default DashboardRoutes
