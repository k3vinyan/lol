import { autoChampionSelect, selectChamp, getChampSkins } from '../js/gamelogic.js';

const header = document.getElementById('header');
const app = document.getElementById('app');

//listener when choose your champion countdown reach zero
header.addEventListener('playerSelect', function(e){

    if(e.detail === 'time') {
        const champ = autoChampionSelect();
        selectChamp(champ)
    }

    if(e.detail == 'player') {
        console.log("player pllayer")
    }
}, {once: true})


app.addEventListener('click', (el)=> {
    el.preventDefault();

    const target = el.target;
    const elClassName = el.target.className;
    const champ = el.target.parentNode.id;

    if(target.className === "skin") {
        body.style.background = "url(" + target.src + ")";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPositionX = "-300px";
    }

    if(elClassName === "champion-img") {
       selectChamp(champ);
    }else if(elClassName === "button") {
        let champion = localStorage.getItem('selected');
        getChampSkins(champion); 
        window.localStorage.setItem('lockin', true);
        header.dispatchEvent(selectEvent); 
    } else {
        toggelDisplay(elClassName);
    }
})

function toggelDisplay(className){
   
    const skins = document.getElementsByClassName("skin-wrapper");

     //next button
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

//emitters
const timerEvent = new CustomEvent('playerSelect', {detail: 'time'});
const selectEvent = new CustomEvent('playerSelect', {detail: 'player'});
export { timerEvent, selectEvent }

