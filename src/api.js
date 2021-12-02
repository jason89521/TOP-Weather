const API_KEY = '2f4e2896474473f4a6adb72e072b96f4';

async function getCoordinates(city) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    return {
        lat: jsonData[0].lat,
        lon: jsonData[0].lon,
    };
}

/**
 * @param {string} city
 */
async function getCityName(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    if (jsonData.cod !== 200) throw jsonData;
    return jsonData.name;
}

async function getWeatherData(city) {
    const coordinates = await getCoordinates(city);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const cityName = await getCityName(city);
    const weatherData = {
        today: jsonData.current,
        tomorrow: jsonData.daily[1],
    };
    weatherData.today.name = cityName;
    weatherData.tomorrow.name = cityName;
    weatherData.tomorrow.feels_like = weatherData.tomorrow.feels_like.day;
    weatherData.tomorrow.temp = weatherData.tomorrow.temp.day;
    return weatherData;
}

export { getCityName, getWeatherData };
