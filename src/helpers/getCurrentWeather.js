import axios from "axios";

const getCurrentWeather = async (state, lat, lon) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


    await axios.get(URI)
        .then(data => {
            state(data.data);
            console.log(data.data.sys)
            const surnise = new Date(data.data.sys.sunrise);
            console.log(surnise.getHours())
            console.log(surnise.getMinutes())
        })
        .catch(err => {
            console.log(err);
        });
};

export default getCurrentWeather;