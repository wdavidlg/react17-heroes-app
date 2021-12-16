import React from 'react'
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {
    return (
        <div>
            <h1>DC Comics</h1>
            <hr/>
            <HeroesList publisher='DC Comics'/>
        </div>
    )
}

export default DcScreen
