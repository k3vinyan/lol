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

function PlayerElement(type, className, id, playerName, ss1, ss2) {

    Element.call(this, type, className, id);

    this.el.appendChild(ss1.el);
    this.el.appendChild(ss2.el);  

    this.playerName = playerName;
    this.ss1 = ss1;
    this.ss2 = ss2;

}

export { Element, PlayerElement }
