import { getCurrentWeather, getTomorrowWeather } from './api';
import { updateCard } from './utils';

const form = document.getElementById('form');
const cardToday = document.getElementById('today');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const city = form.elements['city'].value;
    let todayWeather;
    let tomorrowWeather;
    try {
        todayWeather = await getCurrentWeather(city);
        tomorrowWeather = await getTomorrowWeather(city);
    } catch (error) {
        console.error(error);
        return;
    }

    console.log(tomorrowWeather);
    updateCard(cardToday, todayWeather);
});
