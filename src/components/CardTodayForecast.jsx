import React, { useEffect } from 'react';
import getCurrentPosition from '../helpers/getCurrentPosition';
import axios from 'axios';

const CardTodayForecast = ({ time, weatherImg, temp }) => {



    useEffect(() => {
        getCurrentPosition()
            .then(async (data) => {

                console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.latitude}&lon=${data.longitude}&exclude=minutely,daily&appid=${import.meta.env.VITE_API_KEY}`)
                await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.latitude}&lon=${data.longitude}&exclude=minutely,daily&appid=${import.meta.env.VITE_API_KEY}`)
                    .then(data => {

                    })
            })
    }, [])

    return (


        <div>
            <p>{time}</p>
            <img src={weatherImg} alt="Image of current weather" />
            <p>{temp}</p>
        </div>
    );
}

export default CardTodayForecast;
