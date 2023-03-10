// eslint-disable-next-line import/prefer-default-export
export function createHeader() {
  const header = document.createElement('div');
  header.innerHTML = `<header>
    <h1>The Odin Restaurant</h1>
    <div class='header-buttons'>
      <button id="home-btn">Home</button>
      <button id="menu-btn">Menu</button>
      <button id="contact-btn">Contact</button>
    </div>
    </header>`
  
  return header;
}


