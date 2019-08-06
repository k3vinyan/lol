import {header, thirdCol } from './layout.js';
import { secondCol } from './components/championsBoard.js';
import { firstCol } from './components/playersBoard.js';

import { PlayerElement } from './helpers/helpers.js';



//append to DOM
app.appendChild(header.el);
app.appendChild(firstCol.el);
app.appendChild(secondCol.el);
app.appendChild(thirdCol.el);
