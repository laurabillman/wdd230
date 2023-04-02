function toggleMenu() {
    document.getElementById("top-nav").classList.toggle("open")
    document.getElementById("hamburger-btn").classList.toggle("open")
}

/*const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;*/


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






