const btnSwitch = document.querySelector('#switch button');
const span = document.querySelector('#switch span');
const html = document.documentElement;
const img = document.querySelector('#profile img');

const toggleMode = () => {
  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  }
};

btnSwitch.addEventListener('click', toggleMode);
span.addEventListener('click', toggleMode);
