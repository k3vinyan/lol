import { getChampionsApi } from '../api.js';
import { CONSTANTS } from '../constants.js';

const champions = getChampionsApi();
const mid = document.getElementById("mid-section");

mid.addEventListener('click', (el)=> {
    
    const champName = el.target.parentNode.id;
   
    const player = document.getElementById("player-1");
    console.dir(player.firstChild);

    champions.then( response => {
        const champions = response;
        
        const champ = champions[champName]
        console.log(champions)
        console.log(champName)
        const imgurl = CONSTANTS.IMGURL + champ.image.full;
        player.firstChild.src = imgurl;
    })

})
