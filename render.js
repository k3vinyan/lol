import {header} from './components/header.js';
import { championLayout } from './components/championsBoard.js';
import { leftLayout } from './components/playersBoard.js';

import { PlayerElement } from './helpers/helpers.js';



//append to DOM
app.appendChild(header.el);
app.appendChild(leftLayout.el);
app.appendChild(championLayout.el);

