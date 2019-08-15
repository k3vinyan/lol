import { Element } from './helpers/helpers.js';

const header            = new Element('div', 'section', 'header');
const h1 = new Element('h1')
h1.el.innerHTML = "Header"

header.addChild(h1);

const championLayout    = new Element('div', 'section', 'champion-layout');
const leftLayout        = new Element('div', 'section', 'left-section');
const rightLayout       = new Element('div', 'section',  'right-section');
const h2 = new Element('h1')
h2.el.innerHTML = "rightSection"
rightLayout.addChild(h2)

const SplashLayout      = new Element('div', 'section', 'splash-section');
const splashOption      = new Element('div', 'section', 'splash-option');

export {header, championLayout, leftLayout, rightLayout, SplashLayout };


     