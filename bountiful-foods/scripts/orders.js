
//create variable to track orders and save to local storage
let orders = parseInt(localStorage.getItem('orders'));

const fruitUrl = "data/fruitData.json";
let fruitData;

//add event listener to capture the click to submit form
document.getElementById("submit").addEventListener("click", displayInputDetails);

//call function to get fruit data json file 
apiFetchFruit();
async function apiFetchFruit() {
    try {
        const response = await fetch(fruitUrl);
        if (response.ok) {
            fruitData = await response.json();
            
           
            populateFruitOptions();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//using the fruit data to populate the options in each select component in form 
function populateFruitOptions() {
    let select1Html = '<option value="">Select Fruit 1...</option>';
    let select2Html = '<option value="">Select Fruit 2...</option>';
    let select3Html = '<option value="">Select Fruit 3...</option>';
    for (let i = 0; i < fruitData.length; i++) {
       select1Html += `<option value=${fruitData[i].id}>${fruitData[i].name}</option>`
       select2Html += `<option value=${fruitData[i].id}>${fruitData[i].name}</option>`
       select3Html += `<option value=${fruitData[i].id}>${fruitData[i].name}</option>` 
    }
    document.getElementById("fruit-choices1").innerHTML = select1Html;
    document.getElementById("fruit-choices2").innerHTML = select2Html;
    document.getElementById("fruit-choices3").innerHTML = select3Html;
}


//function to display order info
function displayInputDetails(event) {
   
    let firstName = document.getElementById("formName").value;
    let email = document.getElementById("formEmail").value; 
    let phoneNumber = document.getElementById("formPhone").value;
    let fruit1Index = document.getElementById("fruit-choices1").selectedIndex;
    let fruit2Index = document.getElementById("fruit-choices2").selectedIndex;
    let fruit3Index = document.getElementById("fruit-choices3").selectedIndex;
    let instructions = document.getElementById("formInstructions").value;
   
    let fruit1id = document.getElementById("fruit-choices1").value;
    let fruit2id = document.getElementById("fruit-choices2").value;
    let fruit3id = document.getElementById("fruit-choices3").value;
   
   //check for required form input. 
    if(firstName && email && phoneNumber && fruit1Index >0 &&  fruit2Index > 0 &&  fruit3Index >0)  {
        
        //this prevents the form from submitting and refreshing the page
        event.preventDefault();

        document.getElementById("name").innerHTML = firstName;
        document.getElementById("email").innerHTML = email;
        document.getElementById("phone").innerHTML = phoneNumber;
        document.getElementById("instructions").innerHTML = instructions;
       
        //this is to make sure that I have the correct fruit items since the index in array and selected index could vary
        const fruit1Data = getFruitById(fruit1id);
        const fruit2Data = getFruitById(fruit2id);
        const fruit3Data = getFruitById(fruit3id);
        
        document.getElementById("fruit1").innerHTML = fruit1Data.name;
        document.getElementById("fruit2").innerHTML = fruit2Data.name;
        document.getElementById("fruit3").innerHTML = fruit3Data.name;
        document.getElementById("order-date").innerHTML = new Date().toDateString();

        
        const carbsTotal = fruit1Data.nutritions.carbohydrates + fruit2Data.nutritions.carbohydrates + fruit3Data.nutritions.carbohydrates;
        const proteinTotal = fruit1Data.nutritions.protein + fruit2Data.nutritions.protein + fruit3Data.nutritions.protein;
        const fatTotal = fruit1Data.nutritions.fat + fruit2Data.nutritions.fat + fruit3Data.nutritions.fat;
        const sugarTotal = fruit1Data.nutritions.sugar + fruit2Data.nutritions.sugar + fruit3Data.nutritions.sugar;
        const caloriesTotal = fruit1Data.nutritions.calories + fruit2Data.nutritions.calories + fruit3Data.nutritions.calories;
        
        document.getElementById("carbs").innerHTML = carbsTotal.toPrecision(4);
        document.getElementById("protein").innerHTML = proteinTotal.toPrecision(2);
        document.getElementById("fat").innerHTML = fatTotal.toPrecision(2);
        document.getElementById("sugar").innerHTML = sugarTotal.toPrecision(3);
        document.getElementById("calories").innerHTML = caloriesTotal.toPrecision(4);
        document.getElementById("order-details-box").classList.remove("hidden-details");
        
        if(orders) {
            orders++
            localStorage.setItem('orders', orders);
        
        }
        else {
            orders = 1;
            localStorage.setItem('orders', orders);
        }
      
    }
    
}

//this function loops through the fruitData array and finds item with the id passed in  
function getFruitById(id) {
    for(let i = 0; i < fruitData.length; i++) {
        if(id == fruitData[i].id) {
            return fruitData[i];
        }
    }
}