function createHomeContent() {
  const homeContent = document.createElement('div');
  homeContent.classList.add('page-content');
  homeContent.innerHTML = `<section class="home">
  <p>Welcome to our restaurant, where we serve the most delicious food in town.</p>
  <button id="see-menu-btn">See Our Menu</a>
</section>`;

  return homeContent;
}
// eslint-disable-next-line import/prefer-default-export
export {createHomeContent};
