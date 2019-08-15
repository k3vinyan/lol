import { Element } from '../helpers/helpers.js';
import { CONSTANTS } from '../constants.js';


const message = CONSTANTS.HEADER.MESSAGE.PRESELECT;
const count = CONSTANTS.HEADER.COUNT;

const header = new Element('div', 'section', 'header');
const messageDiv = new Element('div', null, 'header-message');
const timeDiv = new Element('div', null, 'header-time');

messageDiv.addParagraph(message);
timeDiv.addParagraph(count);



header.addChild(messageDiv);
header.addChild(timeDiv);

export { header };