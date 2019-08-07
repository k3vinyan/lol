import { allChampions } from '../api.js';
import { CONSTANTS } from '../constants.js';

//const champions = getChampionsApi();
const mid = document.getElementById("mid-section");
const lockinButton = document.getElementById("lockin-button");

console.log(mid)

mid.addEventListener('click', (el)=> {

    //champion selection
    if(el.target.className === "champion-img") {
        const champName = el.target.parentNode.id;
        const player = document.getElementById("player-1");
    
        allChampions.then( response => {
            const champions = response;
            
            const champ = champions[champName]
            const imgurl = CONSTANTS.URL.IMG + champ.image.full;
            player.firstChild.src = imgurl;
        })
    }

    //lockin button
    if(el.target.className == "button") {
        
    }
    
})

