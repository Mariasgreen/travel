/* eslint-disable require-jsdoc */
const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');


const getColor = () => '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();


const animateMenu = () => {
  menu.style.backgroundColor = getColor();
  menu.style.transition = 'all 6s';
};

function toggleBurger() {
  menu.classList.toggle('header__menu_active');
  setInterval(animateMenu, 1000);
}


menuBtn.addEventListener('click', toggleBurger);


