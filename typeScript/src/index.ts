import './style.css';
import {IData} from "./types";

interface IElements {
    nameCity: Element;
    degrees: Element;
    weather: Element;
    icon: Element;
    wind: Element;
    clouds: Element;
    select: any;
    selectWeather: any;
}

export const elements: IElements = {
    nameCity: document.querySelector('.name-wrapper'),
    degrees: document.querySelector('.degrees-wrapper'),
    weather: document.querySelector('.weather-wrapper'),
    wind: document.querySelector('.wind-wrapper'),
    clouds: document.querySelector('.clouds-wrapper'),
    icon: document.querySelector('.features'),
    select: <HTMLInputElement>document.querySelector('#select'),
    selectWeather: document.querySelector('.selectWeather')
}

console.log('elements.select.value: ', elements.select.value)
async function featchAsyncTodos(type) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${type}&appid=490b334d6d570933ceb0a641bb8c721c`
    const response = await fetch(url)
    const data = await response.json()
    addInformation(data)
    console.log('11111', elements.select.value)
}

const addInformation = (data: IData) => {
    elements.nameCity.textContent = `${data.name} ${data.sys.country}`;
    elements.degrees.innerHTML = Math.round(data.main.temp - 273) + '&deg';
    elements.weather.textContent = data.weather[0]['main'];
    elements.wind.textContent =`wind ${data.wind.speed} m/s`;
    elements.clouds.textContent = `clouds ${data.clouds.all} %`;
    elements.icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
}


elements.select = addEventListener('click', (e)  => {
    const select = document.getElementById('select');
    const value = select.options[select.selectedIndex].value;

    console.log('select: ', select)
    featchAsyncTodos(value)
    // console.log('value', featchAsyncTodos(value))

})

