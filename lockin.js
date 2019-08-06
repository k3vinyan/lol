import { secondCol } from './layout.js';
import { Element } from './helpers.js';

const div = new Element('div', 'test');
div.innerHTML = "cata"

secondCol.addChild(div);
