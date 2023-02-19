//localStorage.clear();
let lastVisitDate = localStorage.getItem('lastVisitDate');
let todaysDate = Date.now();
let daysSinceLastVisit;
localStorage.setItem('lastVisitDate', todaysDate);
if (lastVisitDate) {
    const msInSec = 1000;
    const secInDay = 86400;
    daysSinceLastVisit = Math.round(((todaysDate-lastVisitDate)/msInSec)/secInDay);
}
else {
    daysSinceLastVisit = 0;
}

document.getElementById("last-visited").innerHTML = daysSinceLastVisit;
//console.log(daysSinceLastVisit);

const imagesToLoad = document.querySelectorAll("img[data-src]");
//console.log(imagesToLoad);

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