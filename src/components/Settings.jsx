import React, { useEffect, useState } from 'react';


// Components
import Navbar from './Navbar';
import { Switch } from '@mui/material';

// Styles
import '../styles/Settings.css';
import '../styles/mobile/Settings.css';


const Settings = () => {

    const [temperature, setTemperature] = useState(localStorage.getItem('temperature') ? localStorage.getItem('temperature') : 0);
    const [wind, setWind] = useState(localStorage.getItem('wind') ? localStorage.getItem('wind') : 0);
    const [pressure, setPressure] = useState(localStorage.getItem('pressure') ? localStorage.getItem('pressure') : 0);
    const [precipitation, setPrecipitation] = useState(localStorage.getItem('precipitation') ? localStorage.getItem('precipitation') : 0);
    const [distance, setDistance] = useState(localStorage.getItem('distance') ? localStorage.getItem('distance') : 0);

    const label = { inputProps: { 'aria-label': 'Switch demo' } }


    const forceUpdateTemperuture = () => {
        setTemperature(localStorage.getItem('temperature'));
    };
    const forceUpdateWind = () => {
        setWind(localStorage.getItem('wind'));
    };
    const forceUpdatePressure = () => {
        setPressure(localStorage.getItem('pressure'));
    };
    const forceUpdatePrecipitation = () => {
        setPrecipitation(localStorage.getItem('precipitation'));
    };
    const forceUpdateDistance = () => {
        setDistance(localStorage.getItem('distance'));
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', paddingBottom: '400px', }} className='settings-container'>
            <Navbar />
            <div className='settings'>
                <div className="container-title">
                    <h2>Units</h2>
                </div>
                <div className="units-container">
                    <div className="container-temp container-item-settings">
                        <p className='subtitle-settings'>TEMPERATURE</p>
                        <div className="temp">
                            <button className={`btn-setting ${temperature == 'C' ? 'active' : ''}`}
                                id='C'
                                onClick={() => {
                                    localStorage.setItem("temperature", "C");
                                    forceUpdateTemperuture();
                                }}
                            >Celsius</button>
                            <button className={`btn-setting ${temperature == 'F' ? 'active' : ''}`}
                                id='F'
                                onClick={() => {
                                    localStorage.setItem("temperature", "F");
                                    forceUpdateTemperuture();
                                }}
                            >Fharenheit</button>
                        </div>
                    </div>
                    <div className="container-wind container-item-settings">
                        <p className='subtitle-settings'>WIND SPEED</p>
                        <div className="wind">
                            <button className={`btn-setting ${wind == 'km/h' ? 'active' : ''}`}
                                id='km/h'
                                onClick={() => {
                                    localStorage.setItem("wind", "km/h");
                                    forceUpdateWind();
                                }}
                            >km/h</button>
                            <button className={`btn-setting ${wind == 'm/s' ? 'active' : ''}`}
                                id='m/s'
                                onClick={() => {
                                    localStorage.setItem("wind", "m/s");
                                    forceUpdateWind();
                                }}
                            >m/s</button>
                            <button className={`btn-setting ${wind == 'knots' ? 'active' : ''}`}
                                id='knots'
                                onClick={() => {
                                    localStorage.setItem("wind", "knots");
                                    forceUpdateWind();
                                }}


                            >Knots</button>
                        </div>
                    </div>

                    <div className="container-pressure container-item-settings">
                        <p className='subtitle-settings'>PRESSURE</p>
                        <div className="pressure">
                            <button className={`btn-setting ${pressure == 'hpa' ? 'active' : ''}`}
                                id='hpa'
                                onClick={() => {
                                    localStorage.setItem("pressure", "hpa");
                                    forceUpdatePressure();
                                }}
                            >hPa</button>
                            <button className={`btn-setting ${pressure == 'inches' ? 'active' : ''}`}
                                id='inches'
                                onClick={() => {
                                    localStorage.setItem("pressure", "inches");
                                    forceUpdatePressure();
                                }}
                            >Inches</button>
                            <button className={`btn-setting ${pressure == 'kpa' ? 'active' : ''}`}
                                id='kpa'
                                onClick={() => {
                                    localStorage.setItem("pressure", "kpa");
                                    forceUpdatePressure();
                                }}
                            >kPa</button>
                            <button className={`btn-setting ${pressure == 'mm' ? 'active' : ''}`}
                                id='mm'
                                onClick={() => {
                                    localStorage.setItem("pressure", "mm");
                                    forceUpdatePressure();
                                }}
                            >mm</button>
                        </div>
                    </div>

                    <div className="container-precipitation container-item-settings">
                        <p className='subtitle-settings'>PRECIPITATION</p>
                        <div className="precipitation">
                            <button className={`btn-setting ${precipitation == 'ml' ? 'active' : ''}`}
                                id='ml'
                                onClick={() => {
                                    localStorage.setItem("precipitation", "ml");
                                    forceUpdatePrecipitation();
                                }}
                            >Milimeters</button>
                            <button className={`btn-setting ${precipitation == 'in' ? 'active' : ''}`}
                                id='in'
                                onClick={() => {
                                    localStorage.setItem("precipitation", "in");
                                    forceUpdatePrecipitation();
                                }}
                            >Inches</button>
                        </div>
                    </div>

                    <div className="container-distance container-item-settings">
                        <p className='subtitle-settings'>DISTANCE</p>
                        <div className="distance">
                            <button className={`btn-setting ${distance == 'km' ? 'active' : ''}`}
                                id='km'
                                onClick={() => {
                                    localStorage.setItem("distance", "km");
                                    forceUpdateDistance();
                                }}
                            >Kilometers</button>
                            <button className={`btn-setting ${distance == 'miles' ? 'active' : ''}`}
                                id='miles'
                                onClick={() => {
                                    localStorage.setItem("distance", "miles");
                                    forceUpdateDistance();
                                }}
                            >Miles</button>
                        </div>
                    </div>

                </div>
                <div className="container-title">
                    <h2>Notifications</h2>
                </div>
                <div className="notifications-container">
                    <div>
                        <h2>Notifications</h2>
                        <p>Be aware of the weather</p>
                    </div>
                    <div>
                        <Switch
                            {...label}
                        />
                    </div>
                </div>
                <div className="container-title">
                    <h2>General</h2>
                </div>
                <div className="general-container">
                    <div className="time-container">
                        <div>
                            <h2>12-Hour Time</h2>
                        </div>
                        <div>
                            <Switch
                                {...label}
                            />
                        </div>
                    </div>
                    <div className="separator">
                        <span></span>
                    </div>
                    <div className="location-container">
                        <div>
                            <h2>Location</h2>
                            <p>Get weather of your location</p>
                        </div>
                        <div><Switch {...label} /></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Settings;
