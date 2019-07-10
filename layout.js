import { Element } from './helpers.js';

const firstCol  = new Element('div', 'col', 'blue-team');
const secondCol = new Element('div', 'col', 'player-select');
const thirdCol  = new Element('div', 'col', 'red-team');

const app = document.getElementById("app");

app.appendChild(firstCol.el);
app.appendChild(secondCol.el);
app.appendChild(thirdCol.el);

export {firstCol, secondCol, thirdCol };


