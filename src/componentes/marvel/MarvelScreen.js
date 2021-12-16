import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {

    return (
        <div>
            <h1>Marvel Comics</h1>
            <hr/>
            <HeroesList publisher='Marvel Comics'/>
        </div>
    )
}

export default MarvelScreen

