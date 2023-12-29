import React, { useEffect, useState } from 'react';

// Styles
import '../styles/CardTodayForecast.css';

// Images
import sun from '../images/sun.png';

const CardTodayForecast = ({ time, weatherImg, temp }) => {

    useEffect(() => {
        if (temp) {
            console.log(temp)
        } else {
            console.log('nota ')
        }
    }, [])


    return (
        <div className='container-card-today-forecast'>
            <p>{time ? time : '04:20'}</p>
            <img src={weatherImg ? weatherImg : sun} alt="Image of current weather" />
            <h3>{temp ? `${temp}°C` : '0°C'}</h3>
        </div>
    );
}

export default CardTodayForecast;
