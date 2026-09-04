import  "../styles/styles.css";
import {createTheContentPart} from "./homepage.js";
import {infoAboutRestaurant} from "./about.js";
import {menuItemsCreate} from "./menu.js";

const div = document.querySelector("#content");
createTheContentPart();


const button = document.querySelector(".about")
button.addEventListener("click", () => {
    div.innerHTML = "";
    infoAboutRestaurant();
})


const button2 = document.querySelector(".menu")
button2.addEventListener("click", () => {
    div.innerHTML = "";
    menuItemsCreate();
})

const button3 = document.querySelector(".home")
button3.addEventListener("click", () => {
    div.innerHTML = "";
    createTheContentPart();
})