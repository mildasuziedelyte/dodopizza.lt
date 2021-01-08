import { headerEvents } from './components/header/headerEvents.js'
import { pizzasData } from './data/pizzasData.js';
import { drinksData } from './data/drinksData.js';
import { generateMenu } from './components/menu/GenerateMenu.js';
import { lightboxEvents } from "./components/menu/lightboxEvents.js"

new generateMenu(pizzasData);
new generateMenu(drinksData);

headerEvents();

lightboxEvents();
