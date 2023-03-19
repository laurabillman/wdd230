



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

document.getElementById("submit").addEventListener("click", dateHidden);
