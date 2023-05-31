
const fullNameInput = document.getElementById('reservation__name');
const phoneInput = document.getElementById('reservation__phone');



const fullNameRegex = /^[А-Яа-яЁё\s]+$/;
const phoneRegex = /^[+0-9]+$/;

phoneInput.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    if(!inputValue.match(phoneRegex)) {
      e.target.value = inputValue.substring(0, inputValue.length - 1);
    }
  });

  fullNameInput.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    if(!inputValue.match(fullNameRegex)) {
      e.target.value = inputValue.substring(0, inputValue.length - 1);
    }
  });