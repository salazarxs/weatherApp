import React, { useEffect, useState } from 'react';

// Styles
import '../styles/Cities.css';

// Iconst
import { FaSearch } from 'react-icons/fa';

// Components
import Navbar from './Navbar';
import CardLast5Cities from './CardLast5Cities';

// Helpers
import { SearchWeather } from '../helpers/searchWeather';

const Cities = () => {

    const [last5Cities, setLast5Cities] = useState(localStorage.getItem('historySearch') ? JSON.parse(localStorage.getItem('historySearch')) : ['Santiago', 'Chicago', 'Valparaiso', 'Arica']);
    let currentHistory = JSON.parse(localStorage.getItem('historySearch')) || [];
    const [currentSearch, setCurrentSearch] = useState('');
    const [Search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        currentHistory = JSON.parse(localStorage.getItem('historySearch')) || [];
        if (currentSearch !== '') {
            currentHistory.unshift(currentSearch);
            if (currentHistory.length >= 5) {
                currentHistory.pop();
            }
            SearchWeather(currentSearch, setSearch);
            localStorage.setItem('historySearch', JSON.stringify(currentHistory));
            setCurrentSearch('');
        }
    }


    return (
        <div className='container-cities'>
            <Navbar />
            <div className="container-cards-last5Cities">
                <form onSubmit={(e) => { handleSearch(e) }} >
                    <input type="text"
                        placeholder='Search for cities'
                        className='search-cities'
                        value={currentSearch}
                        onChange={(e) => { setCurrentSearch(e.target.value) }}
                    />
                    <button type='submit'><FaSearch /></button>
                </form>
                {
                    last5Cities.length != 0 ?
                        last5Cities.map((city, i) => (

                            <CardLast5Cities
                                key={i}
                                city={city}
                            />


                        ))
                        :
                        <div className='not-found-cities'>
                            <p>If you search for cities, they will appear here :)</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default Cities;
