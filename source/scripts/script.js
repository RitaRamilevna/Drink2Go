//бургер меню

const menu = () => {
  const mainHeader = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  mainHeader.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    if (mainHeader.classList.contains('main-nav--closed')) {
      mainHeader.classList.remove('main-nav--closed');
      mainHeader.classList.add('main-nav--opened');
    } else {
      mainHeader.classList.add('main-nav--closed');
      mainHeader.classList.remove('main-nav--opened');
    }
  });
};

menu();
