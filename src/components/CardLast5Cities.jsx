import React, { useEffect, useState } from 'react';

// Helpers
import { CalculateTemp } from '../helpers/calculateSettings';
import { GetPerCity } from '../helpers/getPerCity';

// Styles

const CardLast5Cities = ({ temp, img, city, measure }) => {

    const [currentCity, setCurrentCity] = useState();
    //console.log(city ? city : 'no hay na city xd')
    useEffect(() => {
        console.log(city)
        GetPerCity(setCurrentCity, city);
        console.log(currentCity)
    }, [])

    return (
        <div className='container-card-last5Cities'>
            {currentCity != undefined ?
                <>
                    <div>
                        <img src={img} alt={`Image of current weather ${CalculateTemp(measure, temp ? temp : 0)}`} />
                    </div>
                    <div>
                        <h4>{city}</h4>
                        <p>{currentTime}</p>
                    </div>
                    <div>
                        <p>{CalculateTemp(measure, temp)}</p>
                    </div>
                </>
                : 'Loading data...'
            }

        </div>
    );
}

export default CardLast5Cities;
