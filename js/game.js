import { autoChampionSelect } from './gamelogic.js';
import { timerEvent } from '../eventListeners/eventListeners.js';
import { CONSTANTS } from '../constants.js';




function timer(timeout) {
    const id = self.setInterval( function() {
        const header = document.getElementById('header');
        let value = header.children[1].children[0].innerHTML;
        
    
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