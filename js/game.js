import { autoChampionSelect } from './gamelogic.js';

const timeHeader = document.getElementById('header-time');

let count =  timeHeader.children[0].innerHTML


//timer
const interval = setInterval(function() {
    let value = timeHeader.children[0].innerHTML;
    count--;
    timeHeader.children[0].innerHTML = count;

    if(count === 0) {
        autoChampionSelect();
        clearInterval(interval)
    }



}, 1000)

