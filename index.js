const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessages.innerHTML = '';

    let isValid = validateForm();

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
function validateForm() {
    let errors = [];

    if (username.value.trim().length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        errors.push('Please enter a valid email address.');
    }

    if (password.value.trim().length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    if (password.value !== confirmPassword.value) {
        errors.push('Passwords do not match.');
    }

    if (errors.length > 0) {
        displayErrors(errors);
        return false;
    }

    return true;
}
function displayErrors(errors) {
    errors.forEach(error => {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorMessage.classList.add('error-message');
        errorMessages.appendChild(errorMessage);
    });
}
