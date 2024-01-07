import axios from "axios";
import getCurrentPosition from "./getCurrentPosition";

import data from '../content.json';

const GetTodayForecast = async (state) => {

    getCurrentPosition()
        .then(async (position) => {

            /* const URI = `https://api.tomorrow.io/v4/weather/forecast?location=${data.latitude},${data.longitude}&timesteps=1h&apikey=${import.meta.env.VITE_API_KEY2}`; */

            const URI = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${import.meta.env.VITE_API_KEY}& mode=json&lang=es`;

            await axios.get(URI)
                .then(data => {
                    //console.log(data.data.list)
                    //console.log(data.data.timelines)
                    const currentDay = []
                    for (let i = 0; i < 24; i++) {
                        currentDay.push(data.data.list[i])
                    }

                    // 6 9 12 15 18 21h
                    //console.log(currentDay)

                    let finalDataHours = [];
                    for (let i = 0; i < currentDay.length; i++) {
                        const currentDate = new Date(currentDay[i].dt_txt);
                        //console.log(currentDate)
                        //console.log(currentDate.getHours())
                        if (finalDataHours.length <= 6) {
                            switch (currentDate.getHours()) {
                                case 6:
                                    finalDataHours.push([{
                                        6: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 9:
                                    finalDataHours.push([{
                                        9: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 12:
                                    finalDataHours.push([{
                                        12: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 15:
                                    finalDataHours.push([{
                                        15: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 18:
                                    finalDataHours.push([{
                                        18: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 21:
                                    finalDataHours.push([{
                                        21: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;
                                case 0:
                                    finalDataHours.push([{
                                        0: [
                                            {
                                                main: currentDay[i].main,
                                                weather: currentDay[i].weather,
                                                wind: currentDay[i].wind
                                            }
                                        ]
                                    }]);
                                    break;

                                default:
                                    break;
                            };
                        }
                        //console.log(currentDate.getHours())
                    };
                    finalDataHours.sort(function (a, b) {
                        // Extraer las horas como números
                        var hourA = parseInt(Object.keys(a[0])[0]);
                        var hourB = parseInt(Object.keys(b[0])[0]);

                        // Comparar las horas
                        return hourA - hourB;
                    });
                    state(finalDataHours);

                }).catch(err => {
                    console.log(err)
                })
        });

    /* const currentDay = []
    for (let i = 0; i < 24; i++) {
        currentDay.push(data.timelines.hourly[i])
    }

    // 6 9 12 15 18 21h
    //console.log(currentDay)

    let finalDataHours = [];
    for (let i = 0; i < currentDay.length; i++) {
        const currentDate = new Date(currentDay[i].time);
        //console.log(currentDate.getHours())

        switch (currentDate.getHours()) {
            case 6:
                finalDataHours.push({ 6: currentDay[i].values });
                break;
            case 9:
                finalDataHours.push({ 9: currentDay[i].values });
                break;
            case 12:
                finalDataHours.push({ 12: currentDay[i].values });
                break;
            case 15:
                finalDataHours.push({ 15: currentDay[i].values });
                break;
            case 18:
                finalDataHours.push({ 18: currentDay[i].values });
                break;
            case 21:
                finalDataHours.push({ 21: currentDay[i].values });
                break;
            case 0:
                finalDataHours.push({ 0: currentDay[i].values });
                break;

            default:
                break;
        };
        //console.log(currentDate.getHours())
    };
    state(finalDataHours);
    console.log(finalDataHours); */


};

export default GetTodayForecast;