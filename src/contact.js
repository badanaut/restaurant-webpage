function createContactContent() {
  const contactContent = document.createElement('section');
  contactContent.classList.add('contact')
  contactContent.innerHTML = `<h2>Contact Us</h2>
  <div class="contact-info">
    <h3><strong>Our Location:</strong> 123 Main Street<br>Anytown, USA</h3>
    <h3><strong>Phone:</strong> (123) 456-7890</h3>
    <h3>Email: info@odin-restaurant.com</h3>
  </div>`;
    
  return contactContent;
}
// eslint-disable-next-line import/prefer-default-export    
export {createContactContent};