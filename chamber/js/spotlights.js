



let spotLight1 = document.querySelector(".spotlight1-box");
let spotLight2 = document.querySelector(".spotlight2-box");

let businessData;

apiFetch();

async function apiFetch() {
    try {
        const url = "../chamber/data.json";
        const response = await fetch(url);
        if (response.ok) {
            businessData = await response.json();
            console.log(businessData); // this is for testing the call
            displayRandomCompany(businessData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}




function displayRandomCompany(businessData) {
    let gold = [];
    let silver = [];
    for (let i = 0; i < businessData.businesses.length; i++) {
        if (businessData.businesses[i].membershipLevel == "Gold") {
            gold.push(businessData.businesses[i]);
           

        }
        if (businessData.businesses[i].membershipLevel == "Silver") {
            silver.push(businessData.businesses[i]);
           

        }

    }
    const selectedGoldIndex = Math.round(Math.random()*(gold.length-1));
    console.log(selectedGoldIndex);
    const selectedGold = gold[selectedGoldIndex];
    const selectedSilverIndex = Math.round(Math.random()*(silver.length-1));
    const selectedSilver = silver[selectedSilverIndex];
    document.getElementById("ad1").src = selectedGold.imageUrl;
    document.getElementById("ad1-address").innerHTML = selectedGold.address;
    document.getElementById("ad1-phone").innerHTML = selectedGold.phoneNumber;
    document.getElementById("ad2").src = selectedSilver.imageUrl;
    document.getElementById("ad2-address").innerHTML = selectedSilver.address;
    document.getElementById("ad2-phone").innerHTML = selectedSilver.phoneNumber;
}
