/* Menu show or hide */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', (e) => {
    navMenu.classList.toggle('show')
})

// Hide
closeMenu.addEventListener('click', (e) => {
    navMenu.classList.toggle('show')
})