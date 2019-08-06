import {header, firstCol, thirdCol } from './layout.js';
import { secondCol } from './components/championsBoard.js';

import { getPlayersApi } from './championsapi.js';

import { PlayerElement } from './helpers/helpers.js';

//need to dynamic add id 
// players.then( players => {
//     const player = new PlayerElement('div', 'player', 'player-1');
//     player.addPlayerData(players);
//     firstCol.addChild(player);
// })

//append to DOM
app.appendChild(header.el);
app.appendChild(firstCol.el);
app.appendChild(secondCol.el);
app.appendChild(thirdCol.el);
