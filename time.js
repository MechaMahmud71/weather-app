const date = new Date();

let hours = date.getHours();

let minutes = date.getMinutes();

let years = date.getFullYear();

let date_time = date.getDate();

let months = date.getMonth() + 1;

// setting the time in the dom
if (hours >= 10 && minutes <= 10) {
    document.querySelector('.time').textContent = `${hours}:0${minutes}`;

}
if (hours >= 10 && minutes >= 10) {
    document.querySelector('.time').textContent = `${hours}:${minutes}`;

}

if (hours < 10 && minutes >= 10) {
    document.querySelector('.time').textContent = `0${hours}:${minutes}`;

}

if (hours > 10 && minutes < 10) {
    document.querySelector('.time').textContent = `${hours}:0${minutes}`;

}


document.querySelector('.date').textContent = `${date_time}/${months}/${years}`;

// geting location using ip address

// fetch('https://extreme-ip-lookup.com/json/')
//     .then(res => res.json())
//     .then(response => {
//         console.log("conunty", response);

//         document.querySelector('.location').textContent = `Dhaka,${`;

//     });

// reloading by clicking the sync button
document.querySelector('.sync').addEventListener('click', () => {
    window.location.reload();
});

// reloading 
setInterval(() => {
    window.location.reload();
}, 60 * 1000);

export default hours;






