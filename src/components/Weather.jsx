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
import GetTodayForecast from '../helpers/getTodayForecast';

const Weather = () => {
    const [todayWeather, setTodayWeather] = useState();
    const [todayPerHourWeather, setTodayPerHourWeather] = useState();

    useEffect(() => {
        getCurrentPosition()
            .then(data => {
                getCurrentWeather(setTodayWeather, data.latitude, data.longitude,)
            })
    }, []);


    // Get today weather forecast
    useEffect(() => {
        GetTodayForecast(setTodayPerHourWeather);

    }, []);
    useEffect(() => {
        if (todayPerHourWeather != undefined) {
            todayPerHourWeather.map((hour, i) => {
                console.log(hour.temperature)
            })
        } else {
            console.log('undefined la wea')
        }
    }, [todayPerHourWeather])

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
                        {
                            todayPerHourWeather !== undefined
                                ? todayPerHourWeather.map((hour, i) => {
                                    if (i == 0) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[0].temperature} time={'00:00 AM'} />
                                        );
                                    }
                                    if (i == 1) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[6].temperature} time={'6:00 AM'} />
                                        );
                                    }
                                    if (i == 2) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[9].temperature} time={'9:00 AM'} />
                                        );
                                    }
                                    if (i == 3) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[12].temperature} time={'12:00 PM'} />
                                        );
                                    }
                                    if (i == 4) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[15].temperature} time={'3:00 PM'} />
                                        );
                                    }
                                    if (i == 5) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[18].temperature} time={'6:00 PM'} />
                                        );
                                    }
                                    if (i == 6) {
                                        return (
                                            <CardTodayForecast key={i} temp={hour[21].temperature} time={'9:00 PM'} />
                                        );
                                    }

                                })
                                : 'Loading data...'
                        }

                    </div>
                </div>
                <div className='air-conditions'>

                </div>
            </div>
            <div className='last-week'>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Weather;
