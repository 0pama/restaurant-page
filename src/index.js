import './style.css'
import home from './home.js'
import contact from './contact.js';
import gallery from './gallery.js';
import renderMenu from './menu.js';

const homePage = document.getElementById("home");
const conctatPage= document.getElementById("contact-us");
const galleryPage=document.getElementById("gallery");
const menuPage = document.getElementById("menu")
const content =  document.getElementById("content");

home();
document.body.style.backgroundImage = "url('https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/06/Nobu-New-York.jpg')";
    document.body.style.backgroundSize = "200vh 100vh";
    document.body.style.backgroundRepeat = "no-repeat";


menuPage.addEventListener("click", () => {
    content.innerHTML = "";
    console.log("clicked on home log ...");
    renderMenu();
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundSize = "200vh 100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "white";
});

homePage.addEventListener("click", () => {
    content.innerHTML = "";
    console.log("clicked on home log ...");
    document.body.style.backgroundImage = "url('https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/06/Nobu-New-York.jpg')";
    document.body.style.backgroundSize = "200vh 100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "white";
    home();
});

conctatPage.addEventListener("click", () => {
    content.innerHTML = "";
    console.log("clicked on contact page btn log ...");
    contact();
    document.body.style.backgroundImage = "url('https://www.brabbucontract.com/img/projects/hilton-astana-hotel-kazakhstan/website/slide/hilton-astana-hotel-kazakhstan-1.jpg')";
    document.body.style.backgroundSize = "200vh 100vh";
    document.body.style.backgroundRepeat = "no-repeat";
});


galleryPage.addEventListener("click", () => {
    content.innerHTML = "";
    gallery();
    console.log("clicked on galleryPage  btn log ...");
    document.body.style.backgroundImage = "none";

    
});


console.log("working.......")