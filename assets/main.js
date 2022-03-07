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

// Toggle more button for more content in index.html mobile version

const toggleMore = document.querySelector('#more')
