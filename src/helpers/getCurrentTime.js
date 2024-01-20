import axios from "axios";

const GetCurrentTime = async (lat, lang, state) => {

    const URI = `https://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_API_KEY_TIME_ZONE}&format=json&by=position&lat=${lat}&lng=${lang}`;

    await axios.get(URI)
        .then(data => {
            state(data.data)
            console.log(data.data)
        })
        .catch(err => {
            console.log(err);
        });

};

export default GetCurrentTime;
