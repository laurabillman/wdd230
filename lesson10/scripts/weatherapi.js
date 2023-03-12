// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Syracuse,US&units=imperial&APPID=93e08f2f8e84447a287da3181b88089b";

let weatherData;

apiFetch();

//function to fetch api. If response is okay sets data to await response 
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
           weatherData = await response.json();
            console.log(weatherData); // this is for testing the call
            displayResults(weatherData);
            calculateWC();
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
}

/* **************************************
* Calculates the wind chill temperature
*************************************** */



function calculateWC() {
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

}
