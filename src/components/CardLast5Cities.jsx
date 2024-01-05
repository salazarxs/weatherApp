import React, { useEffect, useState } from 'react';

// Helpers
import { CalculateTemp } from '../helpers/calculateSettings';
import { GetPerCity } from '../helpers/getPerCity';
import ProviderImg from '../helpers/providerImg';
import GetCurrentTime from '../helpers/getCurrentTime';

// Styles

const CardLast5Cities = ({ city }) => {


    const [currentCity, setCurrentCity] = useState();
    const [measure, setMeasure] = useState(localStorage.getItem('temperature'));
    const [currentTime, setCurrentTime] = useState();

    const [currentHour, setCurrentHour] = useState();
    const [currentMin, setCurrentMin] = useState();


    useEffect(() => {
        GetPerCity(city, setCurrentCity);
    }, []);

    useEffect(() => {
        if (currentCity != undefined) {
            GetCurrentTime(currentCity.coord.lat, currentCity.coord.lon, setCurrentTime);
            console.log(currentTime)
        }
    }, [currentCity])

    useEffect(() => {

        if (currentTime != undefined) {
            let hour = new Date(currentTime.timestamp * 1000);

            setCurrentHour(`${hour.getHours() < 10 ? '0' + hour.getHours() : hour.getHours()}:${hour.getMinutes() < 10 ? '0' + hour.getMinutes() : hour.getMinutes()}`);

        }

    }, [currentTime])


    return (
        <div className='container-card-last5Cities'>

            {currentCity != undefined ?
                <>
                    <div >
                        <img src={ProviderImg(currentCity.weather.main)} alt={`Image of current weather ${CalculateTemp(measure, currentCity.main.temp ? currentCity.main.temp : 0)}`}
                            style={{ width: '10px', height: 'auto' }}
                        />
                    </div>
                    <div style={{ color: 'white' }}>
                        <h4>{city}</h4>
                        {
                            currentHour != undefined ?
                                <p>{currentHour}</p>
                                : 'Loading data..'
                        }

                    </div>
                    <div style={{ color: 'white' }}>
                        <p>{CalculateTemp(measure, currentCity.main.temp ? currentCity.main.temp : 0)}</p>
                    </div>
                </>
                : 'Loading data...'
            }

        </div>
    );
}

export default CardLast5Cities;
