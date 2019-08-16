import { autoChampionSelect } from '../js/gamelogic.js';

const header = document.getElementById('header');

//listeners
header.addEventListener('timerEqualZero', function(e){
    autoChampionSelect()
}, {once: true})

//emitters
const timerEvent = new Event('timerEqualZero');
export { timerEvent }

