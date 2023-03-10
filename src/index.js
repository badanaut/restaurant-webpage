import {initWebsite, pageContent} from "./init";
import {createContactContent} from "./contact";
import {createHomeContent} from "./home";
import {createMenuContent} from "./menu";

initWebsite();

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', () =>{
  pageContent.removeChild(pageContent.lastChild)
  pageContent.appendChild(createHomeContent())
})

menuBtn.addEventListener('click', () =>{
  pageContent.removeChild(pageContent.lastChild)
  pageContent.appendChild(createMenuContent())
})

contactBtn.addEventListener('click', () =>{
  pageContent.removeChild(pageContent.lastChild)
  pageContent.appendChild(createContactContent())
})

