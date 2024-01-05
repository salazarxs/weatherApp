import React, { useEffect, useState } from 'react';

// Styles
import '../styles/CardLast5Cities.css';

// Components
import Navbar from './Navbar';

// Helpers
import CardLast5Cities from './CardLast5Cities';

const Cities = () => {

    const [last5Cities, setLast5Cities] = useState(localStorage.getItem('last5Cities') ? localStorage.getItem('last5Cities') : ['Santiago', 'Copiapo']);

    useEffect(() => {
        if (last5Cities != undefined) {
            console.log(last5Cities);
        }
    }, [last5Cities]);

    return (
        <div className='container-cities'>
            <Navbar />
            <div className="container-last5Cities">
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
