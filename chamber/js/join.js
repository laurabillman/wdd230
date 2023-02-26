/*function getDate() {
    let currentTime = new Date();
    let curdate = currentTime.getDate();
    document.getElementbyId("hiddenDate").value = curdate;
    return true;

}*/



function dateHidden() {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    console.log(cDay);
    console.log(cMonth);
    console.log(cYear);

    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);

    document.getElementbyId("hiddenDate").value = currentDate;
    console.log(currentDate, time); 

    document.getElementById("submit").addEventListener("click", dateHidden);
}

document.getElementbyId("form-submit").addEventListener("click");
