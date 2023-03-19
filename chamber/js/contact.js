function dateHidden() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
   

    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    

    document.getElementById("hiddenDate").value = currentDate;
    

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
