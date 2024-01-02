import React, { useEffect, useState } from 'react';

// Helpers

import getCurrentPosition from '../helpers/getCurrentPosition';
import getCurrentWeather from '../helpers/getCurrentWeather';
import GetTodayForecast from '../helpers/getTodayForecast';

//Styles
import '../styles/Weather.css';

//Images
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import sunWhitClouds from '../images/sunWhitClouds.png';

// icons
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

// Components
import Navbar from './Navbar';
import CardTodayForecast from './CardTodayForecast';
import CardAirConditions from './CardAirConditions';

const Weather = () => {
    const [todayWeather, setTodayWeather] = useState();
    const [todayPerHourWeather, setTodayPerHourWeather] = useState();
    const [parseSunrise, setParseSunrise] = useState();
    const [parseSunset, setParseSunset] = useState();


    useEffect(() => {
        getCurrentPosition()
            .then(data => {
                getCurrentWeather(setTodayWeather, data.latitude, data.longitude,)
            }).catch(err => {
                console.log(err);
            });
    }, []);


    // Get today weather forecast
    useEffect(() => {
        GetTodayForecast(setTodayPerHourWeather);

    }, []);
    useEffect(() => {
        if (todayWeather) {
            let sunrise = new Date(todayWeather.sys.sunrise * 1000);
            let sunset = new Date(todayWeather.sys.sunset * 1000);

            setParseSunrise(`${sunrise.getHours()}:${sunrise.getMinutes() < 10 ? '0' + sunrise.getMinutes() : sunrise.getMinutes()}`);
            setParseSunset(`${sunset.getHours()}:${sunset.getMinutes() < 10 ? '0' + sunset.getMinutes() : sunset.getMinutes()}`);
        }
    }, [todayWeather])

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
                                ? todayPerHourWeather.map((currentHour, i) => {
                                    if (i == 0) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][0][0].main.temp}
                                                time={'00:00 AM'}
                                                weatherImg={currentHour[0]}
                                            />

                                        );
                                    }
                                    if (i == 1) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][6][0].main.temp}
                                                time={'06:00 AM'}
                                                weatherImg={currentHour[6]}
                                            />

                                        );
                                    }
                                    if (i == 2) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][9][0].main.temp}
                                                time={'09:00 AM'}
                                                weatherImg={currentHour[9]}
                                            />

                                        );
                                    }
                                    if (i == 3) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][12][0].main.temp}
                                                time={'12:00 PM'}
                                                weatherImg={currentHour[12]}
                                            />

                                        );
                                    }
                                    if (i == 4) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][15][0].main.temp}
                                                time={'15:00 PM'}
                                                weatherImg={currentHour[15]}
                                            />

                                        );
                                    }
                                    if (i == 5) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][18][0].main.temp}
                                                time={'18:00 PM'}
                                                weatherImg={currentHour[18]}
                                            />

                                        );
                                    }
                                    if (i == 6) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][21][0].main.temp}
                                                time={'21:00 PM'}
                                                weatherImg={currentHour[21]}
                                            />

                                        );
                                    }

                                })
                                : 'Loading data...'
                        }

                    </div>
                </div>
                <div className='air-conditions'>
                    <div className="container-title-air-conditions">
                        <p>AIR CONDITIONS</p>
                    </div>
                    <div className="container-data-air-conditions">
                        {

                            todayWeather != undefined ?
                                <>

                                    <CardAirConditions
                                        key={'1'}
                                        data={`${todayWeather.wind.speed} km/h`}
                                        icon={<FaWind />}
                                        title={'Wind'}


                                    />
                                    <CardAirConditions
                                        key={'2'}
                                        data={`${todayWeather.main.humidity}%`}
                                        icon={<WiHumidity />}
                                        title={'Humidity'}


                                    />
                                    <CardAirConditions
                                        key={'3'}
                                        data={parseSunset}
                                        icon={<LuSunset />}
                                        title={'Sunset'}


                                    />
                                    <CardAirConditions
                                        key={'4'}
                                        data={parseSunrise}
                                        icon={<LuSunrise />}
                                        title={'Sunrise'}


                                    />
                                </>
                                : 'Loading data..'
                        }
                    </div>
                </div>
            </div>
            <div className='last-week'>
                <div className="container-title-last-week">
                    <p>7-DAY FORECAST</p>
                </div>
                <ul>
                    <li style={{ color: 'var(--font-color)', padding: '0 10px' }}>The free weather api don't have this data, sorry 😢.</li>
                </ul>
            </div>
        </div>
    );
}

export default Weather;
