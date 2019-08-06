import { secondCol } from '../layout.js';
import { Element, ChampionElement } from '../helpers/helpers.js';
import { getChampionsApi } from '../championsapi.js';

const champions = getChampionsApi();

//make class component for lockin?
const lockin = new Element('div', 'lockin-wrapper');
const button = new Element('button', 'lockin-button');
button.el.innerHTML = 'LOCK IN';
lockin.addChild(button);

champions.then( champs => {
    
    const champsWrapper = new Element('div', 'champions-wrapper');

    for (let champ in champs) {
        const data = champs[champ]; 
        const champContainer = new ChampionElement('div', 'champion', data['name']);
        champContainer.addChampionData(data);
        champsWrapper.addChild(champContainer);
    }
    secondCol.addChild(champsWrapper);
    secondCol.addChild(lockin)
})


export { secondCol };