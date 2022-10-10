const header = document.querySelector('.js-header')
const btnMenu = document.querySelector('.js-btn-menu')

function toggleMenu() {
  header.classList.toggle('nav-open')
}
btnMenu.addEventListener('click', toggleMenu)