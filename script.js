// Menu button code

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.sections-navbar');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

// Artist section code

// Object of artist info

const projects = {
  artist1: {
    id: 1,
    name: 'Playboi Carti',
    image: './imgs-capstone/playboi-carti.jpeg',
    intro: 'American rapper.',
    info: 'Member of ASAP mob colectives.',
  },

  artist2: {
    id: 2,
    name: 'Travis Scott',
    image: './imgs-capstone/travis-scott.jpeg',
    intro: 'American rapper, singer, songwriter, and record producer.',
    info: 'Member of Huncho Jack and The Scotts.',
  },

  artist3: {
    id: 3,
    name: 'Future',
    image: './imgs-capstone/future.jpeg',
    intro: 'American rapper.',
    info: 'Two times Grammy Awards winner.',
  },

  artist4: {
    id: 4,
    name: 'Lil Uzi Vert',
    image: './imgs-capstone/lil-uzi-vert.jpg',
    intro: 'American rapper, singer and songwriter.',
    info: 'Member of Roc Nation and Atlantic.',
  },

  artist5: {
    id: 5,
    name: 'Kodak Black',
    image: './imgs-capstone/kodak-black.jpg',
    intro: 'American rapper',
    info: 'Member of Capitol.',
  },

  artist6: {
    id: 6,
    name: 'Lil Wayne',
    image: './imgs-capstone/lil-wayne.jpeg',
    intro: 'American rapper, singer, songwriter, and record executive.',
    info: 'Winner of 143 music awards.',
  },
};

// Artist section code

const artistSection = document.querySelector('.featured-artists');

const artistTitle = document.createElement('h1');
artistTitle.className = 'artist-title';
artistTitle.textContent = 'Featured artists';
artistSection.appendChild(artistTitle);

const redLine = document.createElement('span');
redLine.className = 'span-red';
artistSection.appendChild(redLine);

const artistsMainBox = document.createElement('div');
artistsMainBox.className = 'artists-main-box';
artistSection.appendChild(artistsMainBox);

Object.values(projects).forEach((values) => {
  const artistBox = document.createElement('div');
  artistBox.className = `artist-box ${values.name.toLowerCase().replace(' ', '-')}`;
  artistBox.innerHTML = `
  <img class="artist-img" src=${values.image} alt="artist image">
  <div class="artist-info-box">
    <h1 class="artist-subtitle">${values.name}</h1>
    <h2 class="artist-intro">${values.intro}</h2>
    <p class="artist-info">${values.info}</p>
  </div>
  `;
  artistsMainBox.appendChild(artistBox);
});

const moreBtn = document.createElement('button');
moreBtn.className = 'more-btn';
moreBtn.innerHTML = `
MORE<img class="expand-icon" src="./imgs-capstone/expand-btn.png">
`;
artistSection.appendChild(moreBtn);

const lessBtn = document.createElement('button');
lessBtn.className = 'less-btn';
lessBtn.innerHTML = `
LESS<img class="expand-icon" src="./imgs-capstone/contract-btn.png">
`;
lessBtn.style.display = 'none';
artistSection.appendChild(lessBtn);

const future = document.querySelector('.future');
const lilUzi = document.querySelector('.lil-uzi');
const kodakBlack = document.querySelector('.kodak-black');
const lilWayne = document.querySelector('.lil-wayne');

moreBtn.addEventListener('click', () => {
  future.style.display = 'flex';
  lilUzi.style.display = 'flex';
  kodakBlack.style.display = 'flex';
  lilWayne.style.display = 'flex';
  lessBtn.style.display = 'flex';
  moreBtn.style.display = 'none';
});

lessBtn.addEventListener('click', () => {
  future.style.display = 'none';
  lilUzi.style.display = 'none';
  kodakBlack.style.display = 'none';
  lilWayne.style.display = 'none';
  lessBtn.style.display = 'none';
  moreBtn.style.display = 'flex';
});