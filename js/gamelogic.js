import { CONSTANTS } from '../constants.js';


//select champions for player if times runs out
function autoChampionSelect() {
    const randomNum = Math.floor(Math.random() * 134)
    const champions = ((document.getElementsByClassName("champions-wrapper")));

    if(champions === undefined) {
        const champion = document.getElementById()
    }
    console.log(champions)
    console.log(champions[randomNum])
    console.log(randomNum)
}


export {autoChampionSelect }