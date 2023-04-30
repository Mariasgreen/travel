const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelectorAll('.header__menu');

function toggleBurger() {
  menu.forEach((line) => line.classList.toggle('header__menu_active'));
}

menuBtn.addEventListener('click', toggleBurger);