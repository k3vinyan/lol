import { leftLayout } from '../layout.js';
import { allPlayers } from '../api.js';
import { PlayerElement } from '../helpers/helpers.js';

allPlayers.then( players => {
    const player = new PlayerElement('div', 'player', 'player-1');
    player.addPlayerData(players);
    leftLayout.addChild(player);
})

export { leftLayout }