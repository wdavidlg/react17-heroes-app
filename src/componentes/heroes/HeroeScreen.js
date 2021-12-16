import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroesImages } from '../../helpers/heroesImages'; // Importa todos los recursos, (true) subcarpetas tambien
import {getHeroeById} from '../../selectors/getHeroeById'

//import batman from '../../assets/heroes/dc-batman.jpg'   //importando una sola imagen

 

const HeroesScreen = ({history}) => {
    const params = useParams();
    const {heroeId} = params;
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if(!heroe){
        return <Redirect to='/'/>
    }
    const {
        id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = heroe;

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    return (
        <div className='row mt-5 animate__animated animate__swing'>
            <div className='col-md-4'>
                <img 
                    // src={`../assets/heroes/${id}.jpg`} Desde public assets/heroes
                    // src={batman}                       Importando un solo recurso
                    src={heroesImages(`./${heroeId}.jpg`).default}
                    alt={ superhero }
                    className='img-thumbnail'
                />
            </div>
            <div className='col-md-8'>
                <h3>{ superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>first appearance: </b>{first_appearance}</li>

                </ul>
                <h5>Characteres</h5>
                <p>{characters}</p>
                <button className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
            
        </div>
    )
}

export default HeroesScreen
