import { allChampions } from '../api.js';
import { CONSTANTS } from '../constants.js';

function selectChamp(el){
    const champName = el.target.parentNode.id;
    const player = document.getElementById("player-1");
    localStorage.setItem('selected', champName);

    allChampions.then( response => {
        const champions = response;
        
        const champ = champions[champName]
        const imgurl = CONSTANTS.URL.IMG + champ.image.full;
        player.firstChild.src = imgurl;
    })
}

export { selectChamp }