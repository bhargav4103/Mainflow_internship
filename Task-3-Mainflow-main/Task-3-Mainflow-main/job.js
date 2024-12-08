// JavaScript for Career Exploration Hub

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = [];

    if (name === '') {
        errorMessage.push('Name is required.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.push('Invalid email address.');
    }

    if (message === '') {
        errorMessage.push('Message is required.');
    }

    const errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = ''; // Clear previous error messages
    if (errorMessage.length > 0) {
        errorMessage.forEach(msg => {
            const p = document.createElement('p');
            p.textContent = msg;
            errorContainer.appendChild(p);
        });
    } else {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').submit(); // Submit form if no errors
    }
}

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
}

// Event listeners
document.getElementById('contact-form').addEventListener('submit', validateForm);
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
