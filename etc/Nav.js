class Nav {
    constructor(navData) {
        this.selector = '.header-bottom';
        this.menu = navData;

        this.DOM = null;

        this.render();
    }

    generateNav(){      

        let nav =  document.createElement("nav");

        for (let i=0; i<this.menu.length; i++) {
            let a =  document.createElement("a");
            let link = document.createTextNode(`${this.menu[i].text}`); 
            a.appendChild(link);  
            a.href = `${this.menu[i].link}`;
            nav.appendChild(a);
        }
        
        return nav;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        console.log(this.DOM);
        return false;
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.DOM.insertBefore(this.generateNav(), this.DOM.childNodes[0]);

    }

}

export { Nav }