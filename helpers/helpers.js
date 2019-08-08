import  { CONSTANTS } from '../constants.js';

function Element(type, className, id) {
    const el = document.createElement(type);
    el.classList.add(className);

    if(typeof id != 'undefined') {
        el.id = id;
    }

    this.el = el;
    this.className = className;
}


Element.prototype.addChild = function(child) {
    this.el.appendChild(child.el)

    if(this.children === undefined) {
        this.children = [];
    }
    this.children.push(child)
}

function PlayerElement(type, className, id) {
    Element.call(this, type, className, id);
}

PlayerElement.prototype = Object.create(Element.prototype);
PlayerElement.prototype.constructor = PlayerElement;

PlayerElement.prototype.addPlayerData = function(data) {
    const img = new Element('img', 'player-img');
    const p = new Element('p', 'player-para');
    img.el.src = data.img;
    p.el.innerHTML = data.name;
    this.el.appendChild(img.el);
    this.el.appendChild(img.el);
}

function ChampionElement(type, className, id) {
    Element.call(this, type, className, id);
}

ChampionElement.prototype = Object.create(Element.prototype);
ChampionElement.prototype.constructor = ChampionElement;

ChampionElement.prototype.addChampionData = function(data) {
    const img = new Element('img', 'champion-img');
    const p = new Element('p', 'champion-para');
    img.el.src = CONSTANTS.URL.IMG + data.image.full;
    p.el.innerHTML = data.name;
    this.el.appendChild(img.el);
    this.el.appendChild(p.el);
}

ChampionElement.prototype.getChampionData = function() {
    return this.data;
}

function SkinsCarousel(type, className, id) {
    Element.call(this, type, className, id);
}

SkinsCarousel.prototype.addSkins = function(champion, count) {
   let showSkin = 0;

    for(let i = 0; i < count; i++) {
        const wrapper = new Element('div', 'skin-wrapper')
      
        if(showSkin < 5) {
            showSkin++;
            wrapper.el.attributes['index'] = i;
            //wrapper.el.style.display = "inline-block";
            wrapper.el.classList.add("show")
        } else {
            wrapper.el.attributes['index'] = null;
            //wrapper.el.style.display = "none";
            wrapper.el.classList.add("hide")
        }
        const img = new Element('img', "skin", champion + "-skin-" + i);
        img.el.src =  getChampionSplashUrl(champion, i);
        wrapper.el.appendChild(img.el);
        

        this.el.appendChild(wrapper.el);
    }

    const previous = new Element('a', 'prev');
    const next = new Element('a', 'next');

    previous.el.innerHTML = "&#10094";
    next.el.innerHTML = "&#10095";

    this.el.appendChild(previous.el);
    this.el.appendChild(next.el);
}


function getChampionSplashUrl(champ, count) {
    let url = CONSTANTS.URL.SPLASH + champ + "_" + count + ".jpg";
    return url;
}


export { Element, PlayerElement, ChampionElement, SkinsCarousel, getChampionSplashUrl }
