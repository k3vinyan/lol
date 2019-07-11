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

    this.el.appendChild(child)

    if(this.children === undefined) {
        this.children = [];
    }
    this.children.push(child)
}

function PlayerElement(type, className, playerName, ss1, ss2, bg) {

    Element.call(this, type, className);

    this.el.appendChild(ss1.el);
    this.el.appendChild(ss2.el);
    this.el.appendChild(bg.el);  

    this.playerName = playerName;
    this.ss1 = ss1;
    this.ss2 = ss2;
    this.bg = bg;

}

export { Element, PlayerElement }
