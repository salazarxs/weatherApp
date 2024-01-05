import React, { useEffect, useState } from 'react';


import '../styles/CardAirCondition.css';
import { CalculateWind } from '../helpers/calculateSettings';


const CardAirConditions = ({ icon, data, title }) => {

    const [measure, setMeasure] = useState('m/s');
    useEffect(() => {
        setMeasure(localStorage.getItem('wind'));
    })
    let parseData;
    if (title == 'Wind') {
        parseData = CalculateWind(measure, data[0].wind);
    }
    if (title == 'Humidity') {
        parseData = `${data[0].humidity}%`
    }
    return (
        <div className='container-card-air-condition'>
            <div className="icon-condition">
                {icon}
            </div>
            <div className="data-air-condition">
                <h2>{title}</h2>
                <p>{Array.isArray(data) ? parseData : data}</p>
            </div>
        </div>
    );
}

export default CardAirConditions;
