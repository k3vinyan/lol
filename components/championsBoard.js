import { championLayout } from '../layout.js';
import { Element, ChampionElement } from '../helpers/helpers.js';
import { allChampions } from '../api.js';

//make class component for lockin?
const lockin = new Element('div', 'lockin-wrapper');
const button = new Element('button', 'button', 'lockin-button');
button.el.innerHTML = 'LOCK IN';
lockin.addChild(button);

allChampions.then( response => {
    const champsWrapper = new Element('div', 'champions-wrapper');

    for (let key in response) {
        const data = response[key];
        const id = data['id'];

        const champContainer = new ChampionElement('div', 'champion', id);
        champContainer.addChampionData(data);
        champsWrapper.addChild(champContainer);
    }

    championLayout.addChild(champsWrapper);
    championLayout.addChild(lockin)
})


export { championLayout };