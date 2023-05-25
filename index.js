function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');

function AddMenu(selected, modalPart, opener) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';
  });
}

function RemoveMenu(selected, modalPart, remover) {
  return selected.addEventListener('click', () => modalPart.classList.remove(remover));
}

AddMenu(menu, nav, 'nav-toggle');
RemoveMenu(closeNav, nav, 'nav-toggle');

const speakers = [
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
  {
    name: 'Ariel Camus',
    about: 'Founder & CEO of Microverse, a school for international software developers that is free until you get a job.',
    quote: 'Ariel Camus has 2 current jobs as Founder & CEO at Microverse and Co-founder and CEO at TouristEye',
    image: 'images/speaker1.png',
  },
];

document.querySelector('.speaker-holder').innerHTML = speakers.map((speak) => `
<div class="col-12 col-md-6 speaker-card mt-4">
<div class="image-holder">
    <img src=${speak.image} width="120" height="90%" alt="speaker 1">
</div>
<div class="speaker-info pl-4 pt-4">
    <h4 class="speaker-name">${speak.name}</h4>
    <i class="speaker-about">${speak.about}</i>
    <hr class="line-breaker">
    <p class="speaker-quote">${speak.quote}</p>
</div>
</div>`).join('');

const programs = [
  {
    title: 'Funding for Talents',
    message: 'How to Break into the Tech Industry',
    icon: 'images/icon.png',
  },
  {
    title: 'Expert Mentorship',
    message: 'How to Break into the Tech Industry',
    icon: 'images/icon2.png',
  },
  {
    title: 'Career Exploration',
    message: 'How to Break into the Tech Industry',
    icon: 'images/icon3.png',
  },
  {
    title: 'Expert Mentorship',
    message: 'How to Break into the Tech Industry',
    icon: 'images/icon4.png',
  },
];

document.querySelector('.program-holder').innerHTML = programs.map((program) => `
    <div class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img src=${program.icon} width="50" height="50" alt="program">
            <h4 class="program-title px-2">${program.title}</h4>
            <span class="px-1 text-white">${program.message}</span>
        </div>
    </div>
`).join('');