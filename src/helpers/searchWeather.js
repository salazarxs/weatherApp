import axios from "axios"

export const SearchWeather = async (city, state) => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    await axios.get(URI)
        .then((data) => {
            state(data.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export const HandleSearch = (e) => {
    e.preventDefault();
    currentHistory = JSON.parse(localStorage.getItem('historySearch')) || [];
    currentHistory.push(currentSearch);
    SearchWeather(currentSearch, setTodayWeather);
    localStorage.setItem('historySearch', JSON.stringify(currentHistory));
    setCurrentSearch('');
}