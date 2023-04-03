// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description1');
const apiURLToday = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&units=imperial&APPID=e6781c90308de4dbed6f210d3b08b464";

const apiURL3Day = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=e6781c90308de4dbed6f210d3b08b464";//
let weatherDataToday;
let weatherData3Day;
let todaysDate = new Date().getDate();


apiFetchCurrent();
apiFetch3Day();

//function to fetch api. If response is okay sets data to await response 
async function apiFetchCurrent() {
    try {
        const response = await fetch(apiURLToday);
        if (response.ok) {
            weatherDataToday = await response.json();
            console.log(weatherDataToday); // this is for testing the call
            displayResults(weatherDataToday);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//this gets the multiple day weather forecast
async function apiFetch3Day() {
    try {
        const response = await fetch(apiURL3Day);
        if (response.ok) {
            weatherData3Day = await response.json();
            console.log(weatherData3Day); // this is for testing the call
            display3Day(weatherData3Day);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

//This ouputs day current weather results
function displayResults(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.split(" ").map(capitalize).join(" ");

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = weatherData.main.humidity;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

//this outputs 3 day forecast results
function display3Day(weatherData2) {
    let daysForecast = [];
    for (let i = 0; i < weatherData2.list.length; i++) {
        const date = new Date(weatherData2.list[i].dt_txt);
        const dayOfMonth = date.getDate();
        
        //While testing this late at night I found that sometimes the first element could be today or tomorrow. This if statement handles that case.
        if (i == 0) {
            if (dayOfMonth != todaysDate) {
                daysForecast.push({ date: date, forecast: weatherData2.list[i] });
            }
        }
        //Here we checked two things. 
        //The first is to see if an element was added to the array from the above if statement which would make the length greater than 0. 
        //The second is to make sure that we don't add the same date more than once.
        else {
            if (daysForecast.length == 0 && dayOfMonth != todaysDate) {
                daysForecast.push({ date: date, forecast: weatherData2.list[i] });
            }
            else if (daysForecast[daysForecast.length - 1].date.getDate() != dayOfMonth && daysForecast.length < 3) {
                daysForecast.push({ date: date, forecast: weatherData2.list[i] });
            }
        }

    }


    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector("#day2").innerHTML = `${daysOfTheWeek[daysForecast[0].date.getDay()]} forecast`;
    document.querySelector("#day2-temp").innerHTML = `<strong>${daysForecast[0].forecast.main.temp.toFixed(0)}</strong>`;
    document.querySelector("#description2").innerHTML = daysForecast[0].forecast.weather[0].description;
    document.querySelector("#humidity2").innerHTML = daysForecast[0].forecast.main.humidity;
    document.querySelector("#weather-icon2").setAttribute("src", `https://openweathermap.org/img/w/${daysForecast[0].forecast.weather[0].icon}.png`);
    document.querySelector("#weather-icon2").setAttribute("alt", daysForecast[0].forecast.weather[0].description.split(" ").map(capitalize).join(" "));



    document.querySelector("#day3").innerHTML = `${daysOfTheWeek[daysForecast[1].date.getDay()]} forecast`;
    document.querySelector("#day3-temp").innerHTML = `<strong>${daysForecast[1].forecast.main.temp.toFixed(0)}</strong>`;
    document.querySelector("#description3").innerHTML = daysForecast[1].forecast.weather[0].description;
    document.querySelector("#humidity3").innerHTML = daysForecast[1].forecast.main.humidity;
    document.querySelector("#weather-icon3").setAttribute("src", `https://openweathermap.org/img/w/${daysForecast[1].forecast.weather[0].icon}.png`);
    document.querySelector("#weather-icon3").setAttribute("alt", daysForecast[1].forecast.weather[0].description.split(" ").map(capitalize).join(" "));


    document.querySelector("#day4").innerHTML = `${daysOfTheWeek[daysForecast[2].date.getDay()]} Forecast`;
    document.querySelector("#day4-temp").innerHTML = `<strong>${daysForecast[2].forecast.main.temp.toFixed(0)}</strong>`;
    document.querySelector("#description4").innerHTML = daysForecast[2].forecast.weather[0].description;
    document.querySelector("#humidity4").innerHTML = daysForecast[2].forecast.main.humidity;
    document.querySelector("#weather-icon4").setAttribute("src", `https://openweathermap.org/img/w/${daysForecast[2].forecast.weather[0].icon}.png`);
    document.querySelector("#weather-icon4").setAttribute("alt", daysForecast[2].forecast.weather[0].description.split(" ").map(capitalize).join(" "));


}
/* **************************************
* Calculates the wind chill temperature
*************************************** */



/*function calculateWC() {
    //debugger
    let windSpeed = document.getElementById("windSpeed");
    let windChill = document.getElementById("windChill");
    let temp = weatherData.main.temp;
    console.log(temp);
    //let speed = weatherdata.wind.speed;

    let wc = 35.74 + (0.6215 * weatherData.main.temp) - (35.75 * Math.pow(weatherData.wind.speed, 0.16)) + (0.4275 * weatherData.main.temp) * Math.pow(weatherData.wind.speed, 0.16);
    console.log(wc);

    //Round the answer down to integer
    wc = Math.floor(wc);

    //If chill is greater than temp, return the temp
    wc = (wc > temp) ? `N/A` : wc;


    //Display the windchill
    console.log(wc);

    //wc = "feels like "wc+"°F";
    windChill.innerHTML = wc+"°F";
    windSpeed.innerHTML = weatherData.wind.speed+" km/h";

}*/
