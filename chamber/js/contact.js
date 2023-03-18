function dateHidden() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    console.log(cDay);
    console.log(cMonth);
    console.log(cYear);

    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);

    document.getElementById("hiddenDate").value = currentDate;
    console.log(currentDate, time); 
}

document.getElementById("submitButton").addEventListener("click", dateHidden);


let currentTemp = document.querySelector(".spotlight1-box");
let weatherIcon = document.querySelector(".spotlight2-box");
const apiURL = "chamber/weather/data.json";


let companyData;

apiFetch();

//function to fetch api. If response is okay sets data to await response 
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
           weatherData = await response.json();
            console.log(companyData); // this is for testing the call
            displayResults(companyData);
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


function displayResults(companyData) {
    
    
}
