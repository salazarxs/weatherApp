import React, { useEffect, useState } from 'react';

// Helpers

import getCurrentPosition from '../helpers/getCurrentPosition';
import getCurrentWeather from '../helpers/getCurrentWeather';
import GetTodayForecast from '../helpers/getTodayForecast';

//Styles
import '../styles/Weather.css';
import '../styles/mobile/Weather.css';

//Images
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import sunWhitClouds from '../images/sunWhitClouds.png';

// icons
import { WiHumidity } from "react-icons/wi";
import { FaSearch, FaWind } from "react-icons/fa";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

// Components
import Navbar from './Navbar';
import CardTodayForecast from './CardTodayForecast';
import CardAirConditions from './CardAirConditions';
import { CalculateTemp } from '../helpers/calculateSettings';
import { SearchWeather } from '../helpers/searchWeather';

const Weather = () => {
    const [todayWeather, setTodayWeather] = useState();
    const [todayPerHourWeather, setTodayPerHourWeather] = useState();
    const [parseSunrise, setParseSunrise] = useState();
    const [parseSunset, setParseSunset] = useState();
    const [measure, setMeasure] = useState('C');
    const [currentSearch, setCurrentSearch] = useState();
    let currentHistory = JSON.parse(localStorage.getItem('historySearch')) || [];

    const handleSearch = (e) => {
        e.preventDefault();
        currentHistory = JSON.parse(localStorage.getItem('historySearch')) || [];
        currentHistory.push(currentSearch);
        SearchWeather(currentSearch, setTodayWeather);
        localStorage.setItem('historySearch', JSON.stringify(currentHistory));
        setCurrentSearch('');
    }


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
        setMeasure(localStorage.getItem('temperature'));


    }, []);
    useEffect(() => {
        if (todayWeather) {
            let sunrise = new Date(todayWeather.sys.sunrise * 1000);
            let sunset = new Date(todayWeather.sys.sunset * 1000);

            setParseSunrise(`${sunrise.getHours() < 10 ? '0' + sunrise.getHours() : sunrise.getHours()}:${sunrise.getMinutes() < 10 ? '0' + sunrise.getMinutes() : sunrise.getMinutes()}`);
            setParseSunset(`${sunset.getHours() < 10 ? '0' + sunset.getHours() : sunset.getHours()}:${sunset.getMinutes() < 10 ? '0' + sunset.getMinutes() : sunset.getMinutes()}`);
        }
    }, [todayWeather])


    return (
        <div className='container-weather'>
            <div className="container-nav container-nav-weather">
                <Navbar />
            </div>

            <div className='current-weather'>
                <form onSubmit={(e) => {
                    handleSearch(e)
                }}>
                    <input type="text"
                        placeholder='Search for cities'
                        onChange={(e) => {
                            setCurrentSearch(e.target.value)
                        }}
                        value={currentSearch}

                    />
                    <button type='submit'><FaSearch /></button>
                </form>
                <div className='today-weather'>
                    <div className='stats'>
                        {todayWeather != undefined ?
                            <>
                                <div className="container-city">
                                    <h2>{todayWeather.name}</h2>
                                    <p>Feels like: {CalculateTemp(measure, todayWeather.main.feels_like)}</p>
                                </div>
                                <div className="container-temp">
                                    <p>{CalculateTemp(measure, todayWeather.main.temp)}</p>
                                </div>
                            </>
                            : 'Loading data'}
                    </div>
                    <div className='current-weather-img'>
                        {
                            todayWeather ?

                                <img
                                    src={`http://openweathermap.org/img/w/${todayWeather.weather[0].icon}.png`}
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
                                                weatherImg={currentHour[0]["0"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 1) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][6][0].main.temp}
                                                time={'06:00 AM'}
                                                weatherImg={currentHour[0]["6"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 2) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][9][0].main.temp}
                                                time={'09:00 AM'}
                                                weatherImg={currentHour[0]["9"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 3) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][12][0].main.temp}
                                                time={'12:00 PM'}
                                                weatherImg={currentHour[0]["12"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 4) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][15][0].main.temp}
                                                time={'15:00 PM'}
                                                weatherImg={currentHour[0]["15"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 5) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][18][0].main.temp}
                                                time={'18:00 PM'}
                                                weatherImg={currentHour[0]["18"][0].weather[0].icon}
                                                measure={measure}
                                            />

                                        );
                                    }
                                    if (i == 6) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][21][0].main.temp}
                                                time={'21:00 PM'}
                                                weatherImg={currentHour[0]["21"][0].weather[0].icon}
                                                measure={measure}
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
                                        data={[{ wind: todayWeather.wind.speed }]}
                                        icon={<FaWind />}
                                        title={'Wind'}


                                    />
                                    <CardAirConditions
                                        key={'2'}
                                        data={[{ humidity: todayWeather.main.humidity }]}
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
            <div className="container-nav-mobile">
                <Navbar />
            </div>
        </div>
    );
}

export default Weather;
