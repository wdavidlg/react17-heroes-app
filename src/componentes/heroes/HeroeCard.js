import React from 'react'
import { Link } from 'react-router-dom'
import { heroesImages } from '../../helpers/heroesImages'


const HeroeCard = ({ heroe:{
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
} }) => {
    return (
        <div 
        className="card mb-3 animate__animated animate__heartBeat" 
        style={{maxWidth: 540}}>
            <div className="row">
                <div className="col">
                    <img 
                    //src={`./assets/heroes/${id}.jpg`} 
                    src={heroesImages(`./${id}.jpg`).default}
                    className="img-fluid rounded-start" alt={`${id}`}/>
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) 
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                        <Link to={`/heroe/${id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroeCard
