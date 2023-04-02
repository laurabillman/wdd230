let orders = localStorage.getItem('orders');
//localStorage.setItem('orders', orders);

const fruitUrl = "data/fruitData.json";
let fruitData;

apiFetchFruit();
async function apiFetchFruit() {
    try {
        const response = await fetch(fruitUrl);
        if (response.ok) {
            fruitData = await response.json();
            console.log(fruitData); // this is for testing the call
           
            populateFruitOptions();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function populateFruitOptions() {
    let select1Html = '<option value="-1">Select Fruit 1...</option>';
    let select2Html = '<option value="-1">Select Fruit 2...</option>';
    let select3Html = '<option value="-1">Select Fruit 3...</option>';
    for (let i = 0; i < fruitData.length; i++) {
       select1Html += `<option value=${i}>${fruitData[i].name}</option>`
       select2Html += `<option value=${i}>${fruitData[i].name}</option>`
       select3Html += `<option value=${i}>${fruitData[i].name}</option>` 
    }
    document.getElementById("fruit-choices1").innerHTML = select1Html;
    document.getElementById("fruit-choices2").innerHTML = select2Html;
    document.getElementById("fruit-choices3").innerHTML = select3Html;
}

