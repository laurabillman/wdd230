
getBusinessData();



function output(businesses) {
    let businessCards = document.querySelector(".cards");

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
} 

//function to get businesses json file
async function getBusinessData() {
    const url = "../chamber/data.json";
    const response = await fetch(url);

    if (response.ok) {
        jsonObject = await response.json();
        output(jsonObject.businesses);

    }

}

