import { dividerElem } from "./DOMelems.js";
import APIurl from "./fetchFromAPI.js";

const dividerImgs = {
    mobile: './images/pattern-divider-mobile.svg',
    desktop: './images/pattern-divider-desktop.svg'
}

if (window.innerWidth >= 1440) {
    dividerElem.src = dividerImgs.desktop;
}