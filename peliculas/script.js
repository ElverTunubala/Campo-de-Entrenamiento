import { dat } from './data.js';

let items = document.getElementById('items');

items.innerHTML = '';
dat.forEach(hero => {
    const {superhero,image} = hero;
    items.innerHTML += `
     <div id="items" class="it">
        <img class="image"  src=${image}>
        <li class="nombre" >${superhero}</li>
     </div>
    `
    
})
console.log(dat);

