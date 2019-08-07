import { firstCol } from '../layout.js';
import { allPlayers } from '../api.js';
import { PlayerElement } from '../helpers/helpers.js';

allPlayers.then( players => {
    const player = new PlayerElement('div', 'player', 'player-1');
    player.addPlayerData(players);
    firstCol.addChild(player);
})

export { firstCol };