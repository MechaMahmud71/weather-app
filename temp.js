
class WeatherDay {
    constructor(dayNumber, dayName, temp, state, humidity, max_temp, min_temp, windSpeed, domTemp, domHumidity, domMax, domMin, domState, domName, domWindSpeed, domImage) {

        this.dayName = dayName;
        this.dayNumber = dayNumber;
        this.temp = temp;
        this.state = state;
        this.humidity = humidity;
        this.max = max_temp;
        this.min = min_temp;
        this.windSpeed = windSpeed;
        this.domTemp = domTemp;
        this.domHumidity = domHumidity;
        this.domMax = domMax;
        this.domMin = domMin;
        this.domState = domState;
        this.domName = domName;
        this.domWindSpeed = domWindSpeed;
        this.domImage = domImage;

    }

    //find the day number for next days

    findDayNumber() {

        let nextDayNumber;

        if (this.dayNumber === 6) {
            nextDayNumber = 0;
        }
        else {
            nextDayNumber = this.dayNumber + 1;
        }
        return nextDayNumber;
    }

    //pass the day
    passDay() {
        //console.log(this.findDayNumber());
        return this.findDayNumber();
    }

    //view the days in DOM
    showDays() {
        document.querySelector(this.domName).innerText = this.dayName;
        document.querySelector(this.domTemp).innerText = this.temp;
        document.querySelector(this.domHumidity).innerText = `Humidity: ${this.humidity}%`;
        document.querySelector(this.domMax).textContent = `Maximum: ${this.max}`;
        document.querySelector(this.domMin).textContent = `Minimum: ${this.min}`;
        document.querySelector(this.domWindSpeed).textContent = `Wind Speed: ${this.windSpeed} km/h`;
        document.querySelector(this.domState).textContent = this.state;
        document.querySelector(this.domImage).style.backgroundImage = `url('./icons/${this.state}.png')`;

    }


}



export default WeatherDay;














































