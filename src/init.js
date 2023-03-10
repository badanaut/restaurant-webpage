import {createHomeContent} from "./home";
import {createHeader} from "./header";

const pageContent = document.getElementById('content');
const bodyPage = document.querySelector('body');
const footer = document.createElement('footer')
footer.innerHTML =`<p>&copy; 2023 The Odin Restaurant. All rights reserved.</p>`

function initWebsite() {
  bodyPage.insertBefore(createHeader(), bodyPage.firstChild);
  pageContent.appendChild(createHomeContent());
  bodyPage.appendChild(footer);
}

// eslint-disable-next-line import/prefer-default-export
export {initWebsite, pageContent};