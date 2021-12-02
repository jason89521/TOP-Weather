import { fromUnixTime } from 'date-fns';
import { getWeatherData } from './api';
import { toggleBtn, updateCard } from './utils';

const loading = document.getElementById('loading');
const form = document.getElementById('form');
const sectionDay = document.getElementById('section-day');
const todayCard = document.getElementById('today');
const todayBtn = todayCard.querySelector('.card__btn');
const tomorrowCard = document.getElementById('tomorrow');
const tomorrowBtn = tomorrowCard.querySelector('.card__btn');

let bigFlag = false;
let targetCard = todayCard;

async function init() {
    loading.style.display = 'block';
    let weatherData;
    try {
        weatherData = await getWeatherData('tainan');
    } catch (error) {
        loading.style.display = 'none';
        console.error(error);
        return;
    }

    loading.style.display = 'none';
    updateCard(todayCard, weatherData.today);
    updateCard(tomorrowCard, weatherData.tomorrow);
}

form.addEventListener('submit', async event => {
    event.preventDefault();
    loading.style.display = 'block';
    const city = form.elements['city'].value;
    let weatherData;
    try {
        weatherData = await getWeatherData(city);
    } catch (error) {
        loading.style.display = 'none';
        console.error(error);
        return;
    }

    loading.style.display = 'none';
    updateCard(todayCard, weatherData.today);
    updateCard(tomorrowCard, weatherData.tomorrow);
});

sectionDay.addEventListener('animationiteration', event => {
    sectionDay.style.animationPlayState = 'paused';
    const targetBtn = targetCard.querySelector('.card__btn');
    if (bigFlag) {
        targetCard.classList.add('card--big');
        toggleBtn(targetBtn);
    }
});

sectionDay.addEventListener('transitionend', event => {
    const targetClassList = event.target.classList;
    const targetBtn = targetCard.querySelector('.card__btn');
    if (!bigFlag && targetClassList.contains('card--animation')) {
        sectionDay.classList.remove('section-day--animation');
        sectionDay.style.animationPlayState = 'running';
        targetClassList.remove('card--animation');
        toggleBtn(targetBtn);
    }
});

todayBtn.addEventListener('click', event => {
    targetCard = todayCard;
    if (sectionDay.classList.contains('section-day--animation')) {
        bigFlag = false;
        todayCard.classList.remove('card--big');
    } else {
        sectionDay.classList.add('section-day--animation');
        sectionDay.style.animationPlayState = 'running';
        todayCard.classList.add('card--animation');
        bigFlag = true;
    }
});

tomorrowBtn.addEventListener('click', event => {
    targetCard = tomorrowCard;
    if (sectionDay.classList.contains('section-day--animation')) {
        bigFlag = false;
        tomorrowCard.classList.remove('card--big');
    } else {
        sectionDay.classList.add('section-day--animation');
        sectionDay.style.animationPlayState = 'running';
        tomorrowCard.classList.add('card--animation');
        bigFlag = true;
    }
});

init();
