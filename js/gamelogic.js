import { CONSTANTS } from '../constants.js';
import { allskinsCount } from '../api.js';
import { SkinsCarousel } from '../helpers/helpers.js';


//select champions for player if times runs out
function autoChampionSelect() {
    let champion = CONSTANTS.GAMELOGIC.DEFAULTCHAMP
    getChampSkins(champion);
    return champion;
}

//get skins for selected champion
function getChampSkins(str) {
    const champLayout = document.getElementById('champion-layout');
    const champ = str;
    
    allskinsCount.then(function(response) {
        const skinCount = parseInt(response[champ]) + 1;
        champLayout.innerHTML = "";
        const skinWrapper = new SkinsCarousel('div', 'carousel');
        skinWrapper.addSkins(champ, skinCount);
        champLayout.appendChild(skinWrapper.el)

    })
}


export {autoChampionSelect, getChampSkins }

