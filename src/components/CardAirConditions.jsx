import React from 'react';


import '../styles/CardAirCondition.css';


const CardAirConditions = ({ icon, data, title }) => {
    return (
        <div className='container-card-air-condition'>
            <div className="icon-condition">
                {icon}
            </div>
            <div className="data-air-condition">
                <h2>{title}</h2>
                <p>{data}</p>
            </div>
        </div>
    );
}

export default CardAirConditions;
