// script.js
const imageContainer = document.querySelector(".image-container");
const backgroundImages = ["images/dummy1.jpg", "images/dummy4.jpg", "images/dummy1.jpg", "images/dummy4.jpg"];
let currentIndex = 0;

function changeBackgroundImage(index) {
    imageContainer.style.backgroundImage = `url(${backgroundImages[index]})`;
}

document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
    changeBackgroundImage(currentIndex);
});

document.getElementById("nextButton").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    changeBackgroundImage(currentIndex);
});

// Initial image
changeBackgroundImage(currentIndex);



// Nav bar

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
   
    menu.classList.toggle("open");
});


const menuClose = document.getElementById("close-tag");

menuClose.addEventListener("click", () => {

   
     menu.classList.toggle("open");
});


const toggleSearch = document.getElementById("search1");
const menu1 = document.getElementById("menu2");

toggleSearch.addEventListener("click", () => {
menu1.classList.toggle("hidden");
});

const closeSearch = document.getElementById("close-w");

closeSearch.addEventListener("click", () => {
menu1.classList.toggle("hidden");
});
