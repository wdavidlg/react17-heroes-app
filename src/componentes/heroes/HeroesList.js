import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => {
        return getHeroesByPublisher(publisher);
    },[publisher])

    const getHeroesCards = () => {
        return heroes.map(heroe => (
            <HeroeCard
                key={heroe.id}
                heroe={heroe} />
        ))
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    getHeroesCards()
                }
            </div>
        </div>
    )
}

export default HeroesList
