// Open -close mobile menu

const hamburger = document.querySelector('.mobile-menu-icon')

const toggleMenuDisplay = (menuElement) => {
  menuElement.classList.toggle('show')
}

if (hamburger)
  hamburger.addEventListener('click', () => {
    const menuNavEle = document.querySelector('nav')
    toggleMenuDisplay(menuNavEle)
  })
