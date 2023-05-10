/* eslint-disable require-jsdoc */
const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');


const getColor = () => '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();


const animateMenu = () => {
  menu.style.backgroundColor = getColor();
  window.requestAnimationFrame(animateMenu);
};

function toggleBurger() {
  menu.classList.toggle('header__menu_active');
  animateMenu();
}


menuBtn.addEventListener('click', toggleBurger);


