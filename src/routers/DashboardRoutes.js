import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import DcScreen from '../componentes/dc/DcScreen'
import HeroeScreen from '../componentes/heroes/HeroeScreen'
import MarvelScreen from '../componentes/marvel/MarvelScreen'
import SearchScreen from '../componentes/search/SearchScreen'
import { NavBar } from '../componentes/ui/NavBar'

const DashboardRoutes = () => {


    return (
        <> 
            <NavBar />
            <div className='container mt-5'>
                <Routes>
                    <Route path='/marvel' element={<MarvelScreen />} />
                    <Route path='/heroe/:heroeId' element={<HeroeScreen />} />
                    <Route path='/dc' element={<DcScreen />} />
                    <Route path='/search' element={<SearchScreen />} />
                    <Route path='/*' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
