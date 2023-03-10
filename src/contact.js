function createContactContent() {
  const contactContent = document.createElement('div');
  contactContent.classList.add('page-content');
  contactContent.innerHTML = `<section class="contact">
  <h2>Contact Us</h2>
  <form action="#" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit" class="btn">Send Message</button>
  </form>

  <div class="contact-info">
    <h3>Our Location</h3>
    <p>123 Main Street<br>Anytown, USA</p>

    <h3>Phone</h3>
    <p>(123) 456-7890</p>

    <h3>Email</h3>
    <p>info@deliciousrestaurant.com</p>
  </div>
</section>`;
    
  return contactContent;
}
// eslint-disable-next-line import/prefer-default-export    
export {createContactContent};