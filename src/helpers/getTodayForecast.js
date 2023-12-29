import axios from "axios";
import getCurrentPosition from "./getCurrentPosition";

import data from '../content.json';

const GetTodayForecast = async (state) => {

    /* getCurrentPosition()
        .then(async (data) => {

            const URI = `https://api.tomorrow.io/v4/weather/forecast?location=${data.latitude},${data.longitude}&timesteps=1h&apikey=${import.meta.env.VITE_API_KEY2}`;

            console.log(data.longitude)
            console.log(URI)


            await axios.get(URI)
                .then(data => {
                    //console.log(data.data.timelines)
                    const currentDay = []
                    for (let i = 0; i < 24; i++) {
                        currentDay.push(data.data.timelines.hourly[i])
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
                    console.log(finalDataHours);
                }).catch(err => {
                    console.log(err)
                })
        }); */

    const currentDay = []
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
    console.log(finalDataHours);


};

export default GetTodayForecast;