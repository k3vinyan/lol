import { autoChampionSelect } from './gamelogic.js';
import { CONSTANTS } from '../constants.js';


function timer(timeout) {
    const id = self.setInterval( function() {
        const timeHeader = document.getElementById(CONSTANTS.HEADER.ID.TIMER);
        let value = timeHeader.children[0].innerHTML;
    
        if(parseInt(value) === 0) {
            return;
        }
        value--;
        timeHeader.children[0].innerHTML = value;
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