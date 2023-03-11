function createHomeContent() {
  const homeContent = document.createElement('section');
  homeContent.classList.add('home')
  homeContent.innerHTML = `<h1>Welcome to our restaurant, where we serve the most delicious food in town.</h1>
  <button id="see-menu-btn">See Our Menu</button>`;

  return homeContent;
}

// eslint-disable-next-line import/prefer-default-export
export {createHomeContent};
