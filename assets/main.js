import data from './data.js';

// Open -close mobile menu
// Menu button
const menuBtn = document.querySelector('.menu-btn');
const menuNavEle = document.querySelector('nav');

// Helper function to toggle menu pop-up
const toggleMenuDisplay = (menuElement) => {
  menuElement.classList.toggle('show');
};

let menuOpen = false;
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    toggleMenuDisplay(menuNavEle);
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
}

// Close menu-nav on click menu-item
const menuList = document.querySelectorAll('nav li');
menuList.forEach((menu) => {
  menu.addEventListener('click', () => {
    toggleMenuDisplay(menuNavEle);
    menuBtn.classList.remove('open');
    menuOpen = false;
  });
});

// Toggle more button for more content in index.html mobile version

const toggleMore = document.querySelector('#more');

const showMoreSpeakers = (speakersEle) => {
  speakersEle.style.display = 'flex';
};

if (toggleMore) {
  toggleMore.addEventListener('click', () => {
    const mainSpeakersEle = document.querySelector('.important-speakers');
    showMoreSpeakers(mainSpeakersEle);
    toggleMore.style.display = 'none';
  });
}

// Create speaker cards from data.js
const firstSpeakersEle = document.querySelector('.featured-speakers');
const restSpeakersEle = document.querySelector('.important-speakers');
let speakerCounter = 0;

const insertCard = (element, data) => {
  const {
    name, title, description, imageUrl,
  } = data;
  const card = `
    <div class="card">
      <div class="speaker-img">
        <img src="${imageUrl}" alt="speaker ${speakerCounter + 1}" />
      </div>
      <h3>${name}</h3>
      <h4>${title}</h4>
      <hr />
      <p>${description}</p>
    </div>
  `;
  element.insertAdjacentHTML('beforeend', card);
};

if (firstSpeakersEle && restSpeakersEle) {
  data.forEach((speaker) => {
    if (speakerCounter < 2) {
      insertCard(firstSpeakersEle, speaker);
      speakerCounter += 1;
    } else {
      insertCard(restSpeakersEle, speaker);
      speakerCounter += 1;
    }
  });
}

// Check for scroll to hide social bar
window.addEventListener('scroll', () => {
  const navEle = document.querySelector('nav');
  if (window.scrollY > 34 && window.innerWidth > 768) {
    navEle.style.cssText = 'position:fixed;top:0;';
  } else if (window.innerWidth <= 768) {
    navEle.style.cssText = 'position:fixed;top:0px;';
  } else {
    navEle.style.cssText = 'position:fixed;top:35px;';
  }
});