import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';

const ICON_PREFIX = 'https://openweathermap.org/img/wn/';
const ICON_POSTFIX = '@2x.png';
const degreeCelsius = '&#8451;';

function createLi(content) {
    const li = document.createElement('li');
    li.innerHTML = content;
    return li;
}

/**
 * @param {HTMLDivElement} card
 * @param {*} data
 */
function updateCard(card, data) {
    // Render left side
    card.querySelector('.card__icon').src = ICON_PREFIX + data.weather[0].icon + ICON_POSTFIX;
    card.querySelector('.card__city').innerHTML = data.name;
    card.querySelector('.card__temp').innerHTML = data.temp + degreeCelsius;
    card.querySelector('.card__description').innerHTML = data.weather[0].description;

    // Render right side
    const cardRight = card.querySelector('.card__right');
    const list = cardRight.querySelector('.card__list');
    list.textContent = '';
    list.append(createLi(`Feels Like: ${data.feels_like} ${degreeCelsius}`));
    list.append(createLi(`Humidity: ${data.humidity}`));
    list.append(createLi(`Sunrise: ${format(new Date(fromUnixTime(data.sunrise)), 'HH:mm')}`));
    list.append(createLi(`Sunset: ${format(new Date(fromUnixTime(data.sunset)), 'HH:mm')}`));
}

/**
 * @param {HTMLElement} btn
 */
function toggleBtn(btn) {
    btn.classList.toggle('card__btn--close');
    btn.textContent = btn.classList.contains('card__btn--close') ? 'Close' : 'Details';
}

export { updateCard, toggleBtn };
