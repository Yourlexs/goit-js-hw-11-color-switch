const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onChangeBgrColor);

function onChangeBgrColor(event) {
    const intervalID = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
        event.target.disabled = true;
    }, 1000);

    refs.stopBtn.addEventListener('click', () => {
        clearInterval(intervalID);
        refs.startBtn.disabled = false;
    });
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};