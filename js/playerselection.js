import { CONSTANTS } from '../constants.js';
import { getChampionsApi } from '../championsapi.js';


const champions = getChampionsApi();


const mid = document.getElementById("mid-section");

mid.addEventListener('click', (el)=> {
    
    const champName = el.target.parentNode.id;

    const player = document.getElementById("player-1");
    console.dir(player.firstChild);

    champions.then( response => {
        const champion = response[champName];
        const imgurl = CONSTANTS.IMGURL + champion.image.full;
        player.firstChild.src = imgurl;
    })

})
