import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
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
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:heroeId' component={HeroeScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
