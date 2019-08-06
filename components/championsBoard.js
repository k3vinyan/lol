import { secondCol } from '../layout.js';
import { Element, ChampionElement } from '../helpers/helpers.js';
import { getChampionsApi } from '../api.js';

const champions = getChampionsApi();


//make class component for lockin?
const lockin = new Element('div', 'lockin-wrapper');
const button = new Element('button', 'lockin-button');
button.el.innerHTML = 'LOCK IN';
lockin.addChild(button);

champions.then( response => {
    const champsWrapper = new Element('div', 'champions-wrapper');

    for (let key in response) {
        const data = response[key];
        const id = data['id'];

        const champContainer = new ChampionElement('div', 'champion', id);
        champContainer.addChampionData(data);
        champsWrapper.addChild(champContainer);
    }

    secondCol.addChild(champsWrapper);
    secondCol.addChild(lockin)
})


export { secondCol };