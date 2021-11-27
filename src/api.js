const API_KEY = '2f4e2896474473f4a6adb72e072b96f4';
const INIT = {
    method: 'POST',
};

/**
 * @param {string} city
 */
async function getCurrentWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url, INIT);
    const jsonData = await response.json();
    if (jsonData.cod !== 200) throw jsonData;
    return jsonData;
}

/**
 * @param {string} city
 */
async function getTomorrowWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url, INIT);
    const jsonData = await response.json();
    if (jsonData.cod !== '200') throw jsonData;
    return jsonData;
}

export { getCurrentWeather, getTomorrowWeather, INIT };
