import {createHomeContent} from "./home";
import {createHeader} from "./header";

const content = document.getElementById('content');


function displayContent() {
  content.appendChild(createHeader());
  content.appendChild(createHomeContent());
}

displayContent();
