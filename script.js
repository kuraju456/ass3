const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.querySelector('.error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let errorMessageText = '';

  // Email Validation
  if (!isValidEmail(usernameInput.value)) {
    errorMessageText = 'Please enter a valid email address.';
  } else if (!hasUpperCaseLetter(passwordInput.value) || !hasNumber(passwordInput.value) || hasSpecialCharacters(passwordInput.value, '@')) {
    errorMessageText = 'Password must contain an uppercase letter, a number, and no special characters besides @';
  }

    errorMessage.textContent
    
    

    })
