// Open -close mobile menu

const hamburger = document.querySelector('.mobile-menu-icon')
const menuNavEle = document.querySelector('nav')

const toggleMenuDisplay = (menuElement) => {
  menuElement.classList.toggle('show')
}

if (hamburger)
  hamburger.addEventListener('click', () => {
    toggleMenuDisplay(menuNavEle)
  })

// Close menu-nav on click memu-item
const menuList = document.querySelectorAll('nav li')
menuList.forEach((menu) => {
  menu.addEventListener('click', () => {
    toggleMenuDisplay(menuNavEle)
  })
})

// Toggle more button for more content in index.html mobile version

const toggleMore = document.querySelector('#more')

const showMoreSpeakers = (speakersEle) => {
  speakersEle.style.display = 'block'
}

if (toggleMore)
  toggleMore.addEventListener('click', () => {
    const mainSpeakersEle = document.querySelector('.important-speakers')
    showMoreSpeakers(mainSpeakersEle)
    toggleMore.style.display = 'none'
  })
