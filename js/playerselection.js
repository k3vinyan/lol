import { allChampions, allskinsCount } from '../api.js';
import { CONSTANTS } from '../constants.js';
import { SkinsCarousel } from '../helpers/helpers.js';
import { selectChamp } from './playerlogic.js';

const mid = document.getElementById("champion-layout");
const body = document.getElementsByTagName("BODY")[0];

mid.addEventListener('click', (el)=> {
    el.preventDefault();

    let elClassName = el.target.className;

    let target = el.target;

    if(target.className === "skin") {
        body.style.background = "url(" + target.src + ")";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPositionX = "-300px";
    }

    if(elClassName === "champion-img") {
       selectChamp(el);
        //should use id instead of classname ----fix later
    }else if(elClassName === "button") {
        let champ = localStorage.getItem('selected');

        allskinsCount.then(function(response) {
            const skinCount = parseInt(response[champ]) + 1;
            mid.innerHTML = "";
            const skinWrapper = new SkinsCarousel('div', 'carousel');
            skinWrapper.addSkins(champ, skinCount);
            mid.appendChild(skinWrapper.el)

        })
    } else {
        toggelDisplay(elClassName);
    }
})

function toggelDisplay(className){
    //next button
    const skins = document.getElementsByClassName("skin-wrapper");

    if(className === "next") {
        
        for(let i = 0; i < skins.length; i++) {
            if(skins[skins.length-1].classList.contains("show")) {
                break;
            }
            if(skins[i].classList.contains("show")) {
                skins[i].classList.remove("show");
                skins[i].classList.add("hide");

                skins[i+5].classList.remove("hide");
                skins[i+5].classList.add("show");
                break;
            }
        }
    }

    //prev button
    if(className === "prev") {
        for(let i = 0; i < skins.length; i++) {
            if(skins[0].classList.contains("show")) {
                break;
            }

            if(skins[i].classList.contains("show")) {
                skins[i-1].classList.remove("hide");
                skins[i-1].classList.add("show");

                skins[i+4].classList.remove("show");
                skins[i+4].classList.add("hide");
                break;
            }
        }
    }
}

