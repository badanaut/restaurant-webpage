import {createHomeContent} from "./home";
import {createHeader} from "./header";

const pageContent = document.getElementById('content');

function initWebsite() {
  pageContent.appendChild(createHeader());
  pageContent.appendChild(createHomeContent());
}

// eslint-disable-next-line import/prefer-default-export
export {initWebsite, pageContent};