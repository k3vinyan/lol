import { autoChampionSelect } from './gamelogic.js';
import { timerEvent } from '../eventListeners/eventListeners.js';
import { CONSTANTS } from '../constants.js';

window.localStorage.setItem('selected', undefined)
window.localStorage.setItem('lockin', false);

console.log(window.localStorage)

function timer(timeout) {
    const id = self.setInterval( function() {
        const header = document.getElementById('header');
        let value = header.children[1].children[0].innerHTML;
        const selected = window.localStorage.getItem('selected');
        const lockin = window.localStorage.getItem('lockin');
        if(selected !== "undefined" &&  lockin === true) {
            console.log("cat")
        }

        
    
        if(parseInt(value) === 0) {
            header.dispatchEvent(timerEvent);
            return;
        }
        value--;
        header.children[1].children[0].innerHTML = value;
    }, 1000)

    setTimeout(function(){
        window.clearInterval(id)
    }, timeout)
    
}

timer(CONSTANTS.HEADER.TIMER.MS)

const Game = {
    init: function() {

    }
}