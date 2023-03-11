function createContactContent() {
  const contactContent = document.createElement('section');
  contactContent.classList.add('contact')
  contactContent.innerHTML = `<h2>Contact Us</h2>
  <div class="contact-info">
    <h3>Our Location</h3>
    <p>123 Main Street<br>Anytown, USA</p>

    <h3>Phone</h3>
    <p>(123) 456-7890</p>

    <h3>Email</h3>
    <p>info@deliciousrestaurant.com</p>
  </div>`;
    
  return contactContent;
}
// eslint-disable-next-line import/prefer-default-export    
export {createContactContent};