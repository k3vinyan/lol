import { autoChampionSelect } from '../js/gamelogic.js';
import { selectChamp } from '../js/playerlogic.js';

const header = document.getElementById('header');
const app = document.getElementById('app');

//listener when choose your champion countdown reach zero
header.addEventListener('timerEqualZero', function(e){
   const champ = autoChampionSelect()
   selectChamp(champ)
}, {once: true})


app.addEventListener('click', (el)=> {
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
    }else if(elClassName === "button") {
        let champ = localStorage.getItem('selected');  
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
const timerEvent = new Event('timerEqualZero');
export { timerEvent }

