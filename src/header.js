// eslint-disable-next-line import/prefer-default-export
export function createHeader() {
  const header = document.createElement('div');
  header.innerHTML = `<header>
    <h1>The Odin Restaurant</h1>
    <div>
      <button class="headerBtn">Home</button>
      <button class="headerBtn">Menu</button>
      <button class="headerBtn">Contact</button>
    </div>
    </header>`
  
  return header;
}


