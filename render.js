import {header, firstCol, secondCol, thirdCol } from './layout.js';
import { getChampionsApi, getPlayersApi } from './championsapi.js';

import { Element, PlayerElement, ChampionElement } from './helpers.js';

const app = document.getElementById("app");
const champions = getChampionsApi();
const players = getPlayersApi();




//Adding Data/element to firstCol

//need to dynamic add id 
players.then( players => {
    const player = new PlayerElement('div', 'player', 'player-1');
    console.log(players)
    player.addPlayerData(players);

    firstCol.addChild(player);
})







//Adding Data/element to secondCol
champions.then( champs => {
    
    const champsWrapper = new Element('div', 'champions-wrapper');


    for (let champ in champs) {
        const data = champs[champ]; 
        const champContainer = new ChampionElement('div', 'champion', data['name']);
        
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
