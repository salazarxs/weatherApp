import React, { useEffect, useState } from 'react';

// Styles
import '../styles/CardTodayForecast.css';
import '../styles/mobile/CardTodayForecast.css';


import { CalculateTemp } from '../helpers/calculateSettings';

const CardTodayForecast = ({ time, weatherImg, temp, measure }) => {

    return (
        <div className='container-card-today-forecast'>
            <p>{time ? time : '04:20'}</p>

            <img src={`http://openweathermap.org/img/w/${weatherImg}.png`} alt="Image of current weather" />
            <h3>{CalculateTemp(measure, temp)}</h3>
        </div>
    );
}

export default CardTodayForecast;
