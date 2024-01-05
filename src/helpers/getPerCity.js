import axios from "axios";

//Images
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import sunWhitClouds from '../images/sunWhitClouds.png';

export const GetPerCity = async (city, state) => {

    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;

    console.log(URI)

    await axios.get(URI)
        .then(data => {
            console.log(data.data);
            state(data.data)
        })
        .catch(err => {
            console.log(err);
        });
};