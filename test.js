const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const location = document.getElementById('location').value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    location: location
  };

  sendEmail(formData);

  form.reset(); // Reset the form after submission
});

function sendEmail(formData) {
  const { name, email, phone, message, location } = formData;

  const mailtoLink = `mailto:${email}?subject=Contact Form Submission&body=Name: ${name}%0D%0AContact Number: ${phone}%0D%0AMessage: ${message}%0D%0ALocation: ${location}`;

  window.open(mailtoLink, '_blank');

  // Show success message
  alert('Form submitted successfully!');
}
