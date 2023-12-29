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
            console.log(todayPerHourWeather)
            todayPerHourWeather.map((currentHour, i) => {
                if (i == 0) {
                    console.log(currentHour[0][18][0].main.temp)
                }
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
                                ? todayPerHourWeather.map((currentHour, i) => {
                                    if (i == 0) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][0][0].main.temp}
                                                time={'00:00 AM'}
                                                weatherImg={hour[0]}
                                            />

                                        );
                                    }
                                    if (i == 1) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][6][0].main.temp}
                                                time={'6:00 AM'}
                                                weatherImg={hour[6]}
                                            />

                                        );
                                    }
                                    if (i == 2) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][9][0].main.temp}
                                                time={'9:00 AM'}
                                                weatherImg={hour[9]}
                                            />

                                        );
                                    }
                                    if (i == 3) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][3][0].main.temp}
                                                time={'12:00 PM'}
                                                weatherImg={hour[3]}
                                            />

                                        );
                                    }
                                    if (i == 4) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][15][0].main.temp}
                                                time={'3:00 PM'}
                                                weatherImg={hour[15]}
                                            />

                                        );
                                    }
                                    if (i == 5) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][18][0].main.temp}
                                                time={'6:00 PM'}
                                                weatherImg={hour[18]}
                                            />

                                        );
                                    }
                                    if (i == 6) {
                                        return (
                                            <CardTodayForecast
                                                key={i}
                                                temp={currentHour[0][21][0].main.temp}
                                                time={'9:00 PM'}
                                                weatherImg={hour[21]}
                                            />

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
