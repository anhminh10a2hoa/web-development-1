document.addEventListener('DOMContentLoaded', () => {
  // Get references to the DOM elements
  const form = document.getElementById('form');
  const contactsContainer = document.getElementById('contacts');
  const contactTemplate = document.getElementById('contact-template');

  // Add an event listener to the form's submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    // Create a new FormData object to capture form input values
    const formData = new FormData(form);

    // Clone the contact template
    const newContact = contactTemplate.content.cloneNode(true);

    // Update the cloned contact with form data
    const contactName = newContact.querySelector('h2');
    const contactEmail = newContact.querySelector('.email');
    const contactHomepage = newContact.querySelector('.homepage a');

    contactName.textContent = formData.get('name');
    contactEmail.textContent = formData.get('email');
    contactHomepage.href = formData.get('homepage');
    contactHomepage.textContent = formData.get('homepage');

    // Append the new contact to the contacts container
    contactsContainer.appendChild(newContact);

    // Reset the form to its initial state
    form.reset();
  });
});
