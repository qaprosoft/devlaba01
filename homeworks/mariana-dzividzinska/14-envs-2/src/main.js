import './sass/main.scss';
import './sass/tablet-style.scss';
import './sass/screen-style.scss';
const activator = document.querySelector('.hamburger-menu__btn');

activator.addEventListener('click', toggleMenu);

function toggleMenu() {
  let menuElem = document.querySelector('.main-header__main-navigation');
  menuElem.classList.toggle('_open');
  menuElem.style.transition = 'transform 500ms';
}
