import { timerEvent } from '../eventListeners/eventListeners.js';
import { CONSTANTS } from '../constants.js';

window.localStorage.setItem('selected', undefined)
window.localStorage.setItem('lockin', false);
window.localStorage.setItem('phaseOneEnd', false)

function timer(count) {
    const ms = setTimeOutCounter(count)
    const id = self.setInterval( function() {
        
        const selected = window.localStorage.getItem('selected');
        const lockin = window.localStorage.getItem('lockin');
        const phaseOneEnd = window.localStorage.getItem('phaseOneEnd');

        //End Phase1 Timer and Start Phase2 countdown
        if(selected !== "undefined" &&  lockin === "true" && phaseOneEnd === "false") {
            window.localStorage.setItem('phaseOneEnd', true)
            timer(CONSTANTS.HEADER.TIMER.PHASE2)
            return;
        }

        if(parseInt(count) === 0) {
            header.dispatchEvent(timerEvent);
            return;
        }
        count--;
        header.children[1].children[0].innerHTML = count;
    }, 1000)

    setTimeout(function(){
        window.clearInterval(id)
    }, ms)
    
}

timer(CONSTANTS.HEADER.TIMER.PHASE1)


//helpers

function setTimeOutCounter(int) {
    return ((int*1000) + 1000);
   
}
