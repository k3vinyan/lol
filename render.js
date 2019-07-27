import {header, firstCol, secondCol, thirdCol } from './layout.js';
import { getChampionsapi } from './championsapi.js';
import { Element, ChampionElement } from './helpers.js';

const app = document.getElementById("app");
const champions = getChampionsapi();





//Adding Data/element to secondCol





//Adding Data/element to secondCol
champions.then( champs => {
    
    const champsWrapper = new Element('div', 'champions-wrapper');

    const test = new ChampionElement('div', 'champion');
    const ele = new Element('div');
    
    const attrox = champs['Aatrox'];

    test.addChampionData(attrox)

    for (let champ in champs) {
        const champContainer = new ChampionElement('div', 'champion');
        const data = champs[champ]; 
        champContainer.addChampionData(data);
        
        champsWrapper.addChild(champContainer);
    }
    secondCol.addChild(champsWrapper);
})






    
//append to DOM
app.appendChild(header.el);
app.appendChild(firstCol.el);
app.appendChild(secondCol.el);
app.appendChild(thirdCol.el);
