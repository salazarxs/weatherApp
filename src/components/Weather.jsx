import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

//Styles
import '../styles/Weather.css';
import getCurrentPosition from '../helpers/getCurrentPosition';
import getCurrentWeather from '../helpers/getCurrentWeather';

//Images
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import sunWhitClouds from '../images/sunWhitClouds.png';
import CardTodayForecast from './CardTodayForecast';

const Weather = () => {
    const [todayWeather, setTodayWeather] = useState();

    useEffect(() => {
        getCurrentPosition()
            .then(data => {
                getCurrentWeather(setTodayWeather, data.latitude, data.longitude,)
            })
    }, [])
    return (
        <div className='container-weather'>
            <Navbar />

            <div className='current-weather'>
                <input type="text" placeholder='Search for cities' />
                <div className='today-weather'>
                    <div className='stats'>
                        {todayWeather != undefined ?
                            <>
                                <div className="container-city">
                                    <h2>{todayWeather.name}</h2>
                                    <p>Feels like: {todayWeather.main.feels_like}°F</p>
                                </div>
                                <div className="container-temp">
                                    <p>{todayWeather.main.temp}°F</p>
                                </div>
                            </>
                            : 'Loading data'}
                    </div>
                    <div className='current-weather-img'>
                        {
                            todayWeather ?
                                <img
                                    src={todayWeather.weather.main == 'Cloudy' ? cloudy : todayWeather.weather.main == 'Sun' ? sun : todayWeather.weather.main == 'Rain' ? rain : sunWhitClouds}
                                />
                                : 'Loading data'
                        }
                    </div>
                </div>
                <div className='today-forecast'>
                    <div className="container-title-forecast">
                        <p>TODAY'S FORECAST</p>
                    </div>
                    <div className="container-data-forecast">
                        <CardTodayForecast />
                    </div>
                </div>
                <div className='air-conditions'>

                </div>
            </div>
            <div className='last-week'>
                <ul>
                    <li>a</li>
                </ul>
            </div>
        </div>
    );
}

export default Weather;
