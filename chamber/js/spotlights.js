



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



//goldStatus = businessData.filter(findGold)
//silverStatus = businessData.filter(findSilver)
// this is for testing the call
//displayCompany(businessData.imageURL[0]);




//function triggered by the generate button that finds random index number of selected array with it's response 
//and updates to html. 
function displayRandomCompany(businessData) {
    let gold = [];
    let silver = [];
    for (let i = 0; i < businessData.businesses.length; i++) {
        if (businessData.businesses[i].membershipLevel == "Gold") {
            gold.push(businessData.businesses[i]);
            /*  randomCompany = getRandomIndex(goldStatus);
             
             let name = document.createElement("h2");
             let address = document.createElement("p");
             let phone = document.createElement("p");
             let level = document.createElement("p"); */

        }
        if (businessData.businesses[i].membershipLevel == "Silver") {
            silver.push(businessData.businesses[i]);
            /* randomCompany = getRandomIndex(silverStatus);
            document.getElementById("spotlight2-box").innerHTML = findSilver[randomCompany].imageURL; */

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
/*function output(businesses) {
    //debugger
    let businessAds = document.querySelector(".spotlight-boxes");

    for (let i = 0; i < businesses.length; i++) {
        let section = document.createElement("section");
        let image = document.createElement("img");
        let name = document.createElement("h2")
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let level = document.createElement("p"); 

         
        name.innerHTML = `${businesses[i].name}`;
        address.innerHTML = `Address: ${businesses[i].address}`;
        phone.innerHTML = `Phone Number: ${businesses[i].phoneNumber}`;
        level.innerHTML = `Membership Level: ${businesses[i].membershipLevel}`;



        //Build the image portrait by setting all the relevant attributes
        image.setAttribute('src', businesses[i].imageUrl);
        image.setAttribute('alt', `Portait of ${businesses[i].name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '280');

        //Append the section(card) with the created elements
        
        section.appendChild(image); 
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(level);

        businessCards.appendChild(section);
        document.querySelector(".cards").append(section);

        
    } 
} */


