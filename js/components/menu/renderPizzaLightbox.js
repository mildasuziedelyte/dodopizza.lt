import { pizzasData } from '../../data/pizzasData.js';
// import { pizzasData } from '../../data/pizzasData.js';

function renderPizzaLightbox(itemID){
    let item = undefined;
    // console.log(itemID);

    for (let i = 0; i < pizzasData.menu.length; i++) {
        if(pizzasData.menu[i].id == itemID)
        item = pizzasData.menu[i];
    }

    let lightboxHTML = `<div class="lightbox-left">
        <div class="big-circle"></div>
        <div class="medium-circle"></div>
        <img class="lightbox-image" src="./img/pizzas/${item.img}" alt="pizza-image">
    </div>
    <form class="lightbox-right">
        <div class="lightbox-title">
            <h2>${item.title}</h2>
        </div>
        <div class="lightbox-size">
            25 cm, tradicinis padas, 410g
        </div>
        <div class="lightbox-ingredients">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, obcaecati?
        </div>
        <div class="lightbox-chooseSize">
            <button class="lightbox-chooseTradicinis" type="submit">Maza Vidutine Didele</button>
        </div>
        <button class=" lightbox-chooseTradicinis" type="submit">Tradicinis</button>
        <div class="lightbox-addComponent">
            <h3>Pridėti į picą</h3>
            <div class="lightbox-addC">

            </div>
            <div class="lightbox-addC">
                
            </div>
            <div class="lightbox-addC">
                
            </div>
        </div>
        <button class="button lightbox-addItem" type='submit'>Įdėti į krepšelį už 11,05 &euro;</button>
    </form> -->`;

    const lightbox = document.querySelector('.lightbox');
    // console.log(DOM);

    lightbox.innerHTML = lightboxHTML;


}

export { renderPizzaLightbox };