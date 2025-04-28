document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
});
