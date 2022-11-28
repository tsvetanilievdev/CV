let boxElement = document.getElementById('box');
let colorTextElement = document.getElementById('colorText');
let redAudioElement = document.getElementById('red');
let blueAudioElement = document.getElementById('blue');
let yellowAudioElement = document.getElementById('yellow');

let startBtn = document.getElementById('start');
let intervalInput = document.getElementById('interval');
let longInput = document.getElementById('long');


startBtn.addEventListener('click', () => {
    let interval = Number(intervalInput.value);
    let long = Number(longInput.value);
    start(interval, long);

})
const audios = {
    red: redAudioElement,
    blue: blueAudioElement,
    yellow: yellowAudioElement,
}

// variable to store our intervalID
let nIntervId;
let count = 0;
let step = 0;
let stopCount = 0;



const statistics = {
    blue: 0,
    red: 0,
    yellow: 0
}

const colors = {
    1: 'red',
    2: 'blue',
    3: 'yellow'
}
function changeColorAfterSeconds(seconds = 1) {
    // check if an interval has already been set up
    if (!nIntervId) {
        nIntervId = setInterval(() => flashText(seconds), seconds * 1000);

    }
}


function flashText(seconds) {
    let n = Math.ceil(Math.random() * 3);
    let currColor = colors[n];
    count += seconds;
    step++
    colorTextElement.textContent = `${step} ---> ${currColor}`

    audios[currColor].load();

    audios[currColor].playbackRate = '2.2'

    audios[currColor].play();
    boxElement.style.background = currColor;

    //stop the function
    console.log(step)
    if (count == stopCount) {
        stopTextColor()
    }

}

function stopTextColor() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}

function start(interval, stop) {
    stopCount = stop;
    changeColorAfterSeconds(interval)
}
