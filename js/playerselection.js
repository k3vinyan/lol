import { allChampions, allskinsCount } from '../api.js';
import { CONSTANTS } from '../constants.js';
import { SkinElement, getChampionSplashUrl } from '../helpers/helpers.js';

//const champions = getChampionsApi();
const mid = document.getElementById("champion-layout");


mid.addEventListener('click', (el)=> {
    el.preventDefault();
    console.dir(el.target)

    if(el.target.className === "champion-img") {
        const champName = el.target.parentNode.id;
        const player = document.getElementById("player-1");
        let champ = el.target.parentNode.id;
        localStorage.setItem('selected', champ);
    
        allChampions.then( response => {
            const champions = response;
            
            const champ = champions[champName]
            const imgurl = CONSTANTS.URL.IMG + champ.image.full;
            player.firstChild.src = imgurl;
        })
    }

    //lockin button
    if(el.target.className === "button") {
        let champ = localStorage.getItem('selected');

        allskinsCount.then(function(response) {
            let skincount = parseInt(response[champ]) + 1;
            mid.innerHTML = "";
            for(let i = 0; i < skincount; i++) {
                let url = getChampionSplashUrl(champ, i);
                let div = new SkinElement('div', 'skin', url);
                console.log(div)
                mid.appendChild(div.el)
            }

        })
    }
    
})



