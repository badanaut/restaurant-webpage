const content = document.getElementById("content")

function createHeader() {
  const header = document.createElement("div")
  header.classList.add('header')

  const restaurantName = document.createElement("h1")
  restaurantName.classList.add('restaurant-name')
  restaurantName.textContent = 'The Odin Restaurant'

  const home = document.createElement("a")
  home.href="home.js"
  home.classList.add('header-link')
  home.textContent = 'Home'

  const menu = document.createElement("a")
  menu.href="home.js"
  menu.classList.add('header-link')
  menu.textContent = 'Menu'

  const contact = document.createElement("a")
  contact.href="home.js"
  contact.classList.add('header-link')
  contact.textContent = 'Contact'

  header.appendChild(restaurantName)
  header.appendChild(home)
  header.appendChild(menu)
  header.appendChild(contact)

  return header
}

content.appendChild(createHeader())

