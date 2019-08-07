import { Element } from '../helpers/helpers.js';
import { header } from '../layout.js';

const leftSection = new Element('div', 'col', 'left-header');
const midSection = new Element('div', 'col', 'mid-header');
const rightSection = new Element('div', 'col', 'right-header');

header.addChild(leftSection);
header.addChild(midSection);
header.addChild(rightSection);


