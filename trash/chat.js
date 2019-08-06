import { Element } from '../helpers/helpers.js/index.js';
import { firstCol } from '../layout.js';

function Chatbox() {

    const wrapper = new Element('div', 'chat-wrapper');
    const textBox = new Element('div', 'text-box');
    const typeBox = new Element('div', 'type-box');

    wrapper.addChild(textBox);
    wrapper.addChild(typeBox);
}

const chatbox = new Chatbox();



