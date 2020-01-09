import WeatherDay from './temp.js';
import hours from './time.js';

var calanderDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


const date = new Date();
let currentDayNumber = date.getDay();
let currentday = calanderDays[currentDayNumber];

const days = [];

const proxy = 'https://cors-anywhere.herokuapp.com/';


fetch(`${proxy}https://www.metaweather.com/api/location/${1915035}/`)
    .then(resonse => {
        return resonse.json();
    })
    .then(data => {
//         console.log(data);

        const weather = {
            temp: new Array(),
            state: new Array(),
            humidity: new Array(),
            max_temp: new Array(),
            min_temp: new Array(),
            windSpeed: new Array()
        };
        data.consolidated_weather.forEach(el => {
            weather.temp.push(Math.floor(el.the_temp));
            weather.state.push(el.weather_state_name);
            weather.humidity.push(el.humidity);
            weather.max_temp.push(Math.floor(el.max_temp));
            weather.min_temp.push(Math.floor(el.min_temp));
            weather.windSpeed.push(Math.floor(el.wind_speed));

        });
        // console.log(weather);

        days[0] = new WeatherDay(currentDayNumber, currentday, weather.temp[0], weather.state[0], weather.humidity[0], weather.max_temp[0], weather.min_temp[0], weather.windSpeed[0]);




        for (let i = 1; i <= 5; i++) {

            days[i] = new WeatherDay(days[i - 1].passDay(), calanderDays[days[i - 1].passDay()], weather.temp[i], weather.state[i], weather.humidity[i], weather.max_temp[i], weather.min_temp[i], weather.windSpeed[i]);

            // days[i].showDays();
        }
        // days[0].state = "Heavy Cloud";

        days.forEach((el, index) => {
            el.domName = `#dayName${index}`;
            el.domTemp = `#temp${index}`;
            el.domHumidity = `.humidity${index}`;
            el.domMax = `#max${index}`;
            el.domMin = `#min${index}`;
            el.domWindSpeed = `#wind${index}`;
            el.domState = `#state${index}`;
            el.domImage = `#icon${index}`;

            el.showDays();
        });


//         console.log(days);


        if ((hours >= 19 && hours <= 24) || (hours >= 0 && hours <= 5)) {
            if (days[0].state === 'Light Rain' || days[0].state === 'Showers' || days[0].state === 'Heavy Rain') {
                document.querySelector('.container').style.backgroundImage = "url('./images/night rain.jpg')";
            }
            if (days[0].state === 'Thunderstorm') {
                document.querySelector('.container').style.backgroundImage = "url('./images/thunder.jpg')";
            }

            if (days[0].state === 'Clear') {
                document.querySelector('.container').style.backgroundImage = "url('./images/night.jpg')";
            }
            if (days[0].state === 'Snow' || days[0].state === 'Hail' || days[0].state === 'Sleet') {
                document.querySelector('.container').style.backgroundImage = "url('./images/night snow.jpg')";
            }
            if (days[0].state === "Heavy Cloud") {
                document.querySelector('.container').style.backgroundImage = "url('./images/night heavycloud.jpg')";
            }
            if (days[0].state === "Light Cloud") {
                document.querySelector('.container').style.backgroundImage = "url('./images/night light clouds.jpg')";
            }
        }
        else {
            if (days[0].state === 'Light Rain' || days[0].state === 'Showers' || days[0].state === 'Heavy Rain') {
                document.querySelector('.container').style.backgroundImage = "url('./images/day rain.jpg')";
            }
            if (days[0].state === 'Thunderstorm') {
                document.querySelector('.container').style.backgroundImage = "url('./images/thunder.jpg')";
            }
            if (days[0].state === 'Clear') {
                document.querySelector('.container').style.backgroundImage = "url('./images/dayclear.jpg')";
            }
            if (days[0].state === "Heavy Cloud") {
                document.querySelector('.container').style.backgroundImage = "url('./images/heavyclouds.jpg')";
            }
            if (days[0].state === "Light Cloud") {
                document.querySelector('.container').style.backgroundImage = "url('./images/light cloud.jpg')";
            }
            if (days[0].state === 'Snow' || days[0].state === 'Hail' || days[0].state === 'Sleet') {
                document.querySelector('.container').style.backgroundImage = "url('./images/snow.jpg')";
            }

        }



    });

