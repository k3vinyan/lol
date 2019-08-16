import {header} from './components/header.js';
import { championLayout } from './components/championsBoard.js';
import { leftLayout } from './components/playersBoard.js';

//append to DOM
app.appendChild(header.el);
app.appendChild(leftLayout.el);
app.appendChild(championLayout.el);

