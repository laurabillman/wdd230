const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


getProphetData();



function output(prophets) {
    //debugger
    let prophetCards = document.querySelector(".cards");

    for (let i = 0; i < prophets.length; i++) {
        let section = document.createElement("section");
        let name = document.createElement("h2")
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let image = document.createElement("img");
        

         
        name.innerHTML = `${prophets[i].name} ${prophets[i].lastname}`;
        birthDate.innerHTML = `Birthdate: ${prophets[i].birthdate}`;
        birthPlace.innerHTML = `Birthplace: ${prophets[i].birthplace}`;


        //Build the image portrait by setting all the relevant attributes
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', `Portait of ${prophets[i].name} ${prophets[i].lastname}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        //Append the section(card) with the created elements
        
        section.appendChild(name);
        section.appendChild(birthDate);
        section.appendChild(birthPlace);
        section.appendChild(image); 

        prophetCards.appendChild(section);
        document.querySelector(".cards").append(section);

        
    } 
} 


/*const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ____________`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression*/


//Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. 
//         Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). 
//         Make sure the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

async function getProphetData() {
    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    const response = await fetch(url);

    if (response.ok) {
        jsonObject = await response.json();
        output(jsonObject.prophets);

    }
    console.log(jsonObject.prophets);

}



//console.table(prophets);  // note that we reference the prophet array of the data object given the structure of the json file*/
