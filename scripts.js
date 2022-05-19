const hamBug = document.querySelector('.hamburger');
const crossBut = document.querySelector('.cross-button');
const navMenu = document.querySelector('.lower-mennu-content');
const body = document.querySelector('body');

hamBug.addEventListener('click', () => {
  hamBug.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

crossBut.addEventListener('click', () => {
  hamBug.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('no-scroll');
});

document.querySelectorAll('.nav_link').forEach((n) =>
  n.addEventListener('click', () => {
    hamBug.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('no-scroll');
  })
);