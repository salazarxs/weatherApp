import React from 'react';

const CardLastWeek = ({ currentDay, img, weather, maxTemp, minTemp }) => {
    return (
        <li>
            <div>
                <p>{currentDay}</p>
            </div>
            <div>
                <img src={img} alt="" />
                <p>{weather}</p>
            </div>
            <div>
                <p>{maxTemp}</p>
                <p>{`/${{ minTemp }}`}</p>
            </div>
        </li>
    );
}

export default CardLastWeek;
