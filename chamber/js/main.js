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

let temp = parseInt(temperature.textContent);
console.log(temp);

let speed = parseInt(windSpeed.textContent);

console.log(speed);

calculateWC(temp, speed);




/* **************************************
* Calculates the wind chill temperature
*************************************** */

function calculateWC(temperature, speed) {
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


