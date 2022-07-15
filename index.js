const buttonMenu = document.querySelector('.cabecalho--menu')

const menu = document.querySelector('.menu-lateral')

buttonMenu.addEventListener('click', () => {
menu.classList.toggle('menu-lateral--active')
})
