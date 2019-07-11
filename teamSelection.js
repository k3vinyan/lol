import { Element, PlayerElement } from './helpers.js';
import {firstCol, thirdCol, secondCol } from './layout.js';


function Player(playerName) {

    const ssWrapper = new Element('div', 'ss-wrapper')
    const ss1 = new Element('div', 'ss', 'ss-1')
    const ss2 = new Element('div', 'ss', 'ss-2')
    const bg  = new Element('div', 'bg-image') 

    const playerSelection = new PlayerElement('div', 'player', playerName, ss1, ss2, bg);

    this.ss1 = ss1;
    this.ss2 = ss2;
    this.bg = bg;
    this.playerSelection = playerSelection;

    this.el = playerSelection.el;

}

function Team(n1, n2, n3, n4, n5) {

    const p1 = new Player(n1);
    const p2 = new Player(n2);
    const p3 = new Player(n3);
    const p4 = new Player(n4);
    const p5 = new Player(n5);
    

    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.p5 = p5;

    const teamEl = new Element('div', 'team-wrapper')
    
    for(let player in this) {
        teamEl.addChild(this[player])
    }

    this.el = teamEl.el;
}





