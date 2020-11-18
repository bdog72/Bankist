'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageYOffset,
    top: s1coords.top + window.pageXOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////

// const randomC = () => {
//   const a = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const c = Math.floor(Math.random() * 255);
//   return `rgb(${a},${b},${c})`;
// };

// console.log(randomC());

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER`, e.target);
//   e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`NAV`, e.target);
// });

// /////////////////////////////////////////////

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('mouse enter event');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = e => {
//   alert('mouse enter event arrow');
// };

// /////////////////////////////////////////////
