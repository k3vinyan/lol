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

function PlayerElement(type, className, playerName, ss1, ss2, bg) {

    Element.call(this, type, className);

    this.el.appendChild(ss1);
    this.el.appendChild(ss2);
    this.el.appendChild(bg);  

    this.playerName = playerName;
    this.ss1 = ss1;
    this.ss2 = ss2;
    this.bg = bg;

}

export { Element, PlayerElement }
