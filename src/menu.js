import seafood from "./images/seafood.jpg"
import lambchops from "./images/lamb-chops.jpg"
import cake from "./images/cake.jpg"

function createMenuContent() {
  const menuContent = document.createElement('section');
  menuContent.classList.add('menu')
  menuContent.innerHTML = `<div class="menu-items">
    <div class="menu-item">
      <img src="${seafood}" alt="Dish 1">
      <div><h3>Poseidon's Seafood Paella</h3>
      Poseidon was the Greek god of the sea and earthquakes. This paella is inspired by his connection to the ocean and is made with shrimp, mussels, clams, and saffron-infused rice. It's a flavorful and aromatic dish that will transport you to the shores of Greece.</div>
      <a href="#" class="order-btn">Order Now</a>
    </div>
    <div class="menu-item">
      <img src="${lambchops}" alt="Dish 2">
      <div><h3>Ares' Lamb Chops</h3>
      Ares was the god of war and often associated with strength and power. This is a delicious and flavorful dish that combines the rich flavors of lamb with classic Greek herbs and spices. </div>
      <a href="#" class="order-btn">Order Now</a>
    </div>
    <div class="menu-item">
      <img src="${cake}" alt="Dish 3">
      <div><h3>Freya's Honey Cake</h3>
      Freya is a Norse goddess associated with love, fertility, and beauty. These honey cakes are a sweet and delicious tribute to her.</div>
      <a href="#" class="order-btn">Order Now</a>
    </div>
  </div>`;
  
  return menuContent;
}

// eslint-disable-next-line import/prefer-default-export
export {createMenuContent};
  