import React, { useEffect, useState } from 'react';

// Styles
import '../styles/Cities.css';

// Components
import Navbar from './Navbar';

// Helpers
import CardLast5Cities from './CardLast5Cities';
import { FaSearch } from 'react-icons/fa';

const Cities = () => {

    const [last5Cities, setLast5Cities] = useState(localStorage.getItem('last5Cities') ? localStorage.getItem('last5Cities') : ['Santiago', 'Chicago', 'Valparaiso', 'Arica']);

    useEffect(() => {
        if (last5Cities != undefined) {
            console.log(last5Cities);
        }
    }, [last5Cities]);

    return (
        <div className='container-cities'>
            <Navbar />
            <div className="container-cards-last5Cities">
                <form >
                    <input type="text" placeholder='Search for cities' className='search-cities' />
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
