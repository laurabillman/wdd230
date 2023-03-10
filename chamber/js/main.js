function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open")
    document.getElementById("hamburger-btn").classList.toggle("open")
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;


let now = new Date();
var hrs = now.getHours();
var ins = now.getMinutes();
let secs = now.getSeconds();


let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[now.getDay()];
console.log(day);

if (day == "Monday") {
    let message = ("Come join us for the Chamber meet and greet Wednesday at 7:00p.m.");
    console.log(message);
    document.getElementById("message").textContent = message;

}
else if (day == "Tuesday") {
    let message = ("Come join us for the Chamber meet and greet Wednesday at 7:00p.m.");
    console.log(message);
    document.getElementById("message").textContent = message;

}

/*let temp = parseInt(temperature.textContent);
console.log(temp);

let speed = parseInt(windSpeed.textContent);

console.log(speed);

calculateWC(temp, speed);




/* **************************************
* Calculates the wind chill temperature
*************************************** */

/*function calculateWC(temperature, speed) {
    let windChill = document.getElementById("windChill");

    let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp) * Math.pow(speed, 0.16);
    console.log(wc);

    //Round the answer down to integer
    wc = Math.floor(wc);

    //If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    //Display the windchill
    console.log(wc);

    //wc = "feels like "wc+"°F";
    windChill.innerHTML = wc;

}


// select HTML elements in the document
/*const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Syracuse&units=imperial&APPID=93e08f2f8e84447a287da3181b88089b";


apiFetch();

//function to fetch api. If response is okay sets data to await response 
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
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

function displayResults(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.split(" ").map(capitalize).join(" ");
    
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}*/