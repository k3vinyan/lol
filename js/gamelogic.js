import { CONSTANTS } from '../constants.js';
import { allskinsCount, allChampions } from '../api.js';
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

//insert champion onto player indicator
function selectChamp(champName){

    const player = document.getElementById("player-1");
    localStorage.setItem('selected', champName);

    allChampions.then( response => {
        const champions = response;
        
        const champ = champions[champName]
        const imgurl = CONSTANTS.URL.IMG + champ.image.full;
        player.firstChild.src = imgurl;
    })
}




export {autoChampionSelect, getChampSkins, selectChamp }

