import React, { useMemo, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroeCard from '../heroes/HeroeCard';

const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [inputSearch, setInputSearch] = useState(q);
    

    const heroesFiltered = useMemo( () => {
        return getHeroesByName(q);
    }, [q]);

    

    const handleChange = (e) => {
        const {value} = e.target;
        setInputSearch(value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ inputSearch }`);
    }

    const getResults = () => {
        return heroesFiltered.map(heroe => (
            <HeroeCard
            key={heroe.id}
            heroe={heroe}/>
        ))
    }
    
    return (
        <div>
          <h1>Search Screen</h1>  
          <hr/>
          <div className='row'>
              <div className='col-md-5 mb-5'>
                  <h4>Search Form</h4>
                  <hr/>
                  <form onSubmit={handleSearch}>
                      <input
                        type='text'
                        placeholder='Find your heroe'
                        className='form-control'
                        onChange={handleChange}
                        value={inputSearch}
                        />
                    <button
                        type='submit'
                        className='btn mt-3 btn-block btn-outline-primary m-1'
                    >
                        Search...
                    </button>
                  </form>
              </div>
              <div className='col-md-7'>
              <h4>Results</h4>
                <hr/>
                <div className='container'>
                    
                    {
                        getResults()
                    }
                    
                </div>
              </div>
          </div>
        </div>
    )
}

export default SearchScreen
