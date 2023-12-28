import axios from "axios";

const getCurrentWeather = async (state, lat, lon) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const header = new Headers({
        'Content-Type': 'application/json'
    })
    await axios.get(URI)
        .then(data => {
            state(data.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export default getCurrentWeather;