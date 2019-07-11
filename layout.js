import { Element } from './helpers.js';


const header    = new Element('div', 'header');
const firstCol  = new Element('div', 'col', 'left-section');
const secondCol = new Element('div', 'col', 'mid-section');
const thirdCol  = new Element('div', 'col', 'right-section');

const app = document.getElementById("app");

app.appendChild(header.el);
app.appendChild(firstCol.el);
app.appendChild(secondCol.el);
app.appendChild(thirdCol.el);

export {header, firstCol, secondCol, thirdCol };


