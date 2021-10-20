// import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const background = {
  interval: null,
  showOn: false,

  start() {
    if (this.showOn) { return; }
    this.showOn = true;
    this.interval = setInterval(() => {
      document.body.style.backgroundColor = randomColors(colors);
    }, 1000);
  },

  stop() {
    clearInterval(this.interval);
    this.showOn = false;
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColors(colors) {
  let i = 0;
  do { i = randomIntegerFromInterval(0, colors.length - 1); }
  while (j === i);
  j = i;
  return colors[j];
};

let j = 0;

// === Main ===

document.body.style.backgroundColor = colors[j];

refs.startBtn.addEventListener('click', background.start.bind(background));
refs.stopBtn.addEventListener('click', background.stop.bind(background));
