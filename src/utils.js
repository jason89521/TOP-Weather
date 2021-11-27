const ICON_PREFIX = 'https://openweathermap.org/img/wn/';
const ICON_POSTFIX = '@2x.png';
const degreeCelsius = '&#8451;';

/**
 * @param {HTMLDivElement} card
 * @param {*} weatherData
 */
function updateCard(card, weatherData) {
    card.querySelector('.card__icon').src = ICON_PREFIX + weatherData.weather[0].icon + ICON_POSTFIX;
    card.querySelector('.card__city').innerHTML = weatherData.name;
    card.querySelector('.card__temp').innerHTML = weatherData.main.temp + degreeCelsius;
    card.querySelector('.card__description').innerHTML = weatherData.weather[0].description;
}

export { updateCard };
