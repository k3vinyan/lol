import { getChampionsApi } from '../api.js';
import { CONSTANTS } from '../constants.js';

const champions = getChampionsApi();
const mid = document.getElementById("mid-section");
const lockinButton = document.getElementById("lockin-button");

mid.addEventListener('click', (el)=> {
    
    console.dir(el.target)

    //champion selection
    if(el.target.className === "champion-img") {
        const champName = el.target.parentNode.id;
        const player = document.getElementById("player-1");
    
        champions.then( response => {
            const champions = response;
            
            const champ = champions[champName]
            const imgurl = CONSTANTS.URL.IMG + champ.image.full;
            player.firstChild.src = imgurl;
        })
    }

    //lockin button
    if(el.target.className == "button") {
        mid.innerHTML = "dog"
    }
    
})

