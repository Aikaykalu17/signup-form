'use strict';
const btnHover = document.querySelector('.btn__input-field');
const inputField = document.querySelectorAll('input');
const btnGreen = document.querySelector('.btn__input-field');
const label = document.querySelectorAll('.hidden');

// Handle Hover
btnHover.addEventListener('mouseover', () => {
  btnHover.style.opacity = 0.7;
});
btnHover.addEventListener('mouseout', () => {
  btnHover.style.opacity = '';
});

// Handle Empty fields errors
const checkInputField = function (e) {
  inputField.forEach((field, index) => {
    let labels = label[index];
    let isEmailField = field.type === 'email';
    if (field.value.trim() === '') {
      e.preventDefault();
      field.style.border = '2px solid red';
      labels.style.display = 'block';
      field.classList.add('red_placeholder');
    } else if (isEmailField && !validateEmail(field.value)) {
      field.style.border = '2px solid red';
      labels.style.display = 'block';
      labels.textContent = 'This is not a valid e-mail!';
      field.classList.add('red_placeholder');
    } else {
      field.style.border = '';
      labels.style.display = '';
      field.classList.remove('red_placeholder');
    }
  });
};
// Email validation
const validateEmail = function (email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
// Button event handler
btnGreen.addEventListener('click', checkInputField);
inputField.forEach(field => {
  field.addEventListener('input', checkInputField);
});
// Enter key event handler
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkInputField(e);
});
