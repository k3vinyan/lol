import { firstCol } from '../layout.js';
import { getPlayersApi } from '../api.js';
import { PlayerElement } from '../helpers/helpers.js';

const players = getPlayersApi();

players.then( players => {
    const player = new PlayerElement('div', 'player', 'player-1');
    player.addPlayerData(players);
    firstCol.addChild(player);
})

export { firstCol };