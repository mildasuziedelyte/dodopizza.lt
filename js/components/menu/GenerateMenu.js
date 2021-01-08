class generateMenu {
    constructor(data) {
        this.selector = data.selector;
        this.class = data.class;
        this.title = data.title;
        this.path = data.imagePath;
        this.button = data.button;
        this.menu = data.menu;

        this.DOM = null;

        this.render();
    }
    
    generateItem(item, showErrors = false) {

        let itemTag = document.createElement("div");
        itemTag.classList.add("item");
        itemTag.classList.add(`${this.class}-item`);
        itemTag.classList.add("col-3");
        itemTag.setAttribute("id", `${item.id}`);

        let itemMainTag = document.createElement("div");
        itemMainTag.classList.add("item-main")
        let imgTag = document.createElement("img");
        imgTag.src = `${this.path}${item.img}`;
        imgTag.alt =`${this.class} photo`
        let productTitleTag = document.createElement("h2");
        productTitleTag.classList.add("product-title");
        let productTitle = document.createTextNode(`${item.title}`);
        let descriptionTag = document.createElement("p");
        descriptionTag.classList.add("product-description");
        let description = document.createTextNode(`${item.description}`);

        productTitleTag.appendChild(productTitle);
        descriptionTag.appendChild(description);

        itemMainTag.appendChild(imgTag);
        itemMainTag.appendChild(productTitleTag);
        itemMainTag.appendChild(descriptionTag);

        let itemFooterTag = document.createElement("div");
        itemFooterTag.classList.add("item-footer")
        let priceTag = document.createElement("div");
        priceTag.classList.add("price");
        let priceText = document.createTextNode(`nuo ${item.price}`)
        let buttonTag = document.createElement("a");
        buttonTag.classList.add("pasirinkti");
        buttonTag.classList.add("button");
        buttonTag.href = '#';
        let buttonText = document.createTextNode(`${this.button}`);

        priceTag.appendChild(priceText);
        buttonTag.appendChild(buttonText);

        itemFooterTag.appendChild(priceTag);
        itemFooterTag.appendChild(buttonTag);

        itemTag.appendChild(itemMainTag);
        itemTag.appendChild(itemFooterTag);

    //     let itemHTML = `<div class="item col-3">
    //     <div class="item-main">
    //     <img src="${this.path}${item.img}" alt="Pizza">
    //         <h2 class="product-title">${item.title}</h2>
    //         <p class="product-description">${item.description}</p>
    //     </div>
    //     <div class="item-footer">
    //         <div class="price">
    //             nuo ${item.price}
    //         </div>
    //         <a class="pasirinkti button" href="#">Pasirinkti</a>
    //     </div>
    // </div>`
    
    //     return itemHTML;
    // console.log(itemTag);
        return itemTag;
    }

    generateTitle(){
        let titleRow = document.createElement("div");
        titleRow.classList.add("row");
        let titleDiv = document.createElement("div");
        titleDiv.classList.add(`section-heading`);
        titleDiv.classList.add(`col-12`);
        let h1Tag = document.createElement("h1");
        let title = document.createTextNode(`${this.title}`);
        h1Tag.appendChild(title);

        titleDiv.appendChild(h1Tag);
        titleRow.appendChild(titleDiv);

        return titleRow;
    }

    generateSectionMenu(){

        // console.log(titleRow);

        let itemsRow = document.createElement("div");
        itemsRow.classList.add("row");

        for (let i = 0; i < this.menu.length; i++) {
            itemsRow.appendChild(this.generateItem(this.menu[i]))
        }

        // let menuHTML ='';

        // for (let i = 0; i < this.menu.length; i++) {
        //     menuHTML += this.generateItem(this.menu[i]);  
        // }

        // return menuHTML;
        return itemsRow;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        // this.DOM.innerHTML = this.generateSection();
        // this.DOM.insert(this.generateSection());

        this.DOM.insertAdjacentElement("afterbegin", this.generateTitle())
        this.DOM.insertAdjacentElement("beforeend", this.generateSectionMenu())
    }

}

export { generateMenu}

