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


if (day == "Monday") {
    let message = ("Come join us for the Chamber meet and greet Wednesday at 7:00p.m.");
  
    document.getElementById("message").textContent = message;

}
else if (day == "Tuesday") {
    let message = ("Come join us for the Chamber meet and greet Wednesday at 7:00p.m.");
  
    document.getElementById("message").textContent = message;

}


