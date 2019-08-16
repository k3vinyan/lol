import { CONSTANTS } from '../constants.js';
import { allskinsCount } from '../api.js';


//select champions for player if times runs out
function autoChampionSelect() {
    const randomNum = Math.floor(Math.random() * 134)
    const champions = ((document.getElementsByClassName("champions-wrapper")));

    if(champions === undefined) {
        const champion = document.getElementById(CONSTANTS.GAMELOGIC.DEFAULTCHAMP)

    }

    console.log(champions)
    console.log(champions[randomNum])
    console.log(randomNum)
}

function getChampSkins() {
    allskinsCount.then(function(response) {
        const skinCount = parseInt(response[champ]) + 1;
        mid.innerHTML = "";
        const skinWrapper = new SkinsCarousel('div', 'carousel');
        skinWrapper.addSkins(champ, skinCount);
        mid.appendChild(skinWrapper.el)

    })
}


export {autoChampionSelect, getChampSkins }

