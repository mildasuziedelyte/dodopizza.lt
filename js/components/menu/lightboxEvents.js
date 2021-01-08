import { renderPizzaLightbox } from '../menu/renderPizzaLightbox.js';

function lightboxEvents () {

    let items = document.querySelectorAll('.pizza-item');
    // console.log(items);

    items.forEach(item => {
        item.addEventListener('click', () => {

            let itemID = item.getAttribute('id');
            // console.log(itemID);

            renderPizzaLightbox(itemID);

            let modal = document.querySelector('.modal');
            // console.log(modal);
            modal.classList.toggle('modal-visible');
        })
    })

    let close = document.querySelector('.close');
    close.addEventListener('click', () => {
        let modal = document.querySelector('.modal');
        modal.classList.remove('modal-visible');
    })

    let modal = document.getElementById('myModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('modal-visible');   
        } 
        console.log(event.target);
      }

}

export { lightboxEvents };
