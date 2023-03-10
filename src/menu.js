function createMenuContent() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('page-content');
  menuContent.innerHTML = `<section class="menu">
  <h2>Featured Dishes</h2>
  <div class="menu-items">
    <div class="menu-item">
      <img src="dish1.jpg" alt="Dish 1">
      <h3>Dish 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" class="btn">Order Now</a>
    </div>
    <div class="menu-item">
      <img src="dish2.jpg" alt="Dish 2">
      <h3>Dish 2</h3>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="btn">Order Now</a>
    </div>
    <div class="menu-item">
      <img src="dish3.jpg" alt="Dish 3">
      <h3>Dish 3</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="btn">Order Now</a>
    </div>
  </div>
  </section>`;
  
  return menuContent;
}

// eslint-disable-next-line import/prefer-default-export
export {createMenuContent};
  