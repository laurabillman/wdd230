//create variable to store and retrieve the order count from the browser local storage
let orders = parseInt(localStorage.getItem('orders'));

//if order count has value set the number on page equal to the order count. If not set to 0 
if(orders) {
    document.getElementById("drink-number").innerHTML = orders.toString();
}
else {
    document.getElementById("drink-number").innerHTML = "0";
} 

//get current date and set modified date on page equal to that date. Use toDateString function for format
const today = new Date();
document.getElementById("mod-date").innerHTML = today.toDateString();


//grab all images for lazy loading
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

//funciton to observe lazy loading visibility on screen
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}
