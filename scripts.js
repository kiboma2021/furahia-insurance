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

const $worksSection = document.getElementById('add-management');

const ManagementList = [
  {
    name: 'Grace Okello',
    role: 'Chairman',
    image: './imgs/salome_mwangi.jpeg',
    decription: 'Miss Grace is a Non-Executive Director and Chairman of Furahia Insurance and its subsidiaries having been first appointed to the Board in 2004.',
  },
  {
    name: 'Ann Rose',
    role: 'Board Member',
    image: './imgs/ann.jpeg',
    decription: 'Ann Rose was appointed to the Board on 28th March 2019 and \
     a member of the Board Audit & Compliance Committee. He is a Fellow Member of the \
    Institute of Certified Public Accountants of Kenya (ICPAK) and the Association \
    of Chartered Certified Accountants, UK (ACCA).',
  },
  {
    name: 'Nameless Wahu',
    role: 'Board Member',
    image: './imgs/wahu.jpeg',
    decription: 'Miss. Wahu is a Non-Executive Director and Chairman of Furahia Insurance and its \
    subsidiaries having been first appointed to the Board in 2004.',
  },
  {
    name: 'Jonathan Mwamburi',
    role: 'Director',
    image: './imgs/jacob.jpeg',
    decription: 'Mr. Jonathan was appointed to the Board in 2006. \
    He has extensive international experience in the insurance industry and is \
    currently the Head of Insurance for the Aga Khan Fund for Economic Development \
    (AKFED)',
  },
  {
    name: 'Ibraham John',
    role: 'CEO',
    image: './imgs/man2.jpeg',
    decription: 'Ibraham John has more than 20 years of management experience in \
    financial services, accounting, finance, investment analysis and risk management. \
    He is a member of the Canadian Institute of Chartered Accountants.',
  },
  {
    name: 'Martha Kombe',
    role: 'General Manager',
    image: './imgs/martha.jpeg',
    decription: 'Martha Kombe is an experienced investment professional, \
    passionate about financial markets and the investment industry. Overtime, he has \
    built a track record of devising investment and asset allocation strategies, \
    constructing resilient portfolios, managing risk and delivering superior \
    risk-adjusted returns.',
  },

];

for (let i = 0; i < ManagementList.length; i++) {
  const card = document.createElement('section');

  const count = i;
  card.classList.add('card', 'card-bg', `card-bg-${count}`);

    card.innerHTML = `<div class="management-profile col-6 ${count > 1 ? 'hide-management' : ''}">
    <img class="management-img" src="${ManagementList[i].image}" alt="Chairman">
    
    <div class="prof-hist">
      <p> <span class="person-name"> ${ManagementList[i].name} </span> <br>
        <span class="mag-title">${ManagementList[i].role}</span> <br><br>            
        <span class="mag-desc"> ${ManagementList[i].decription}</span> </p>
    </div>
  </div>`;
  $worksSection.appendChild(card);
}

// Show more managers by clicking on more button
const moreManagersButton = document.getElementById('toggle-more-speakers');
moreManagersButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.hide-management').forEach((el) => {
      el.classList.toggle('hide-management');
    });
    moreManagersButton.style.display = 'none';
  },
);