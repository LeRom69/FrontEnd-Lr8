function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;

    document.querySelector('.clock').innerText = timeString;
}

setInterval(updateClock, 1000);


///////////////////////2////////////////////////////////////////

let timers = [
    { id: 1, time: 3600, interval: null },
    { id: 2, time: 600, interval: null },
    { id: 3, time: 60, interval: null }
];

function startTimer(id) {
    let timer = timers.find(t => t.id === id);

    if (!timer.interval) {
        timer.interval = setInterval(function () {
            if (timer.time > 0) {
                timer.time--;
                updateTimerDisplay(id);
            } else {
                stopTimer(id);
            }
        }, 1000);
    }
}

function stopTimer(id) {
    let timer = timers.find(t => t.id === id);

    if (timer.interval) {
        clearInterval(timer.interval);
        timer.interval = null;
    }
}

function resetTimer(id) {
    let timer = timers.find(t => t.id === id);
    timer.time = getInitialTime(id);
    updateTimerDisplay(id);
    stopTimer(id);
}

function updateTimerDisplay(id) {
    let timer = timers.find(t => t.id === id);
    let hours = Math.floor(timer.time / 3600);
    let minutes = Math.floor((timer.time % 3600) / 60);
    let seconds = timer.time % 60;
    document.getElementById(`timer${id}`).innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function getInitialTime(id) {
    switch (id) {
        case 1:
            return 3600;
        case 2:
            return 600;
        case 3:
            return 60; 
        default:
            return 0;
    }
}

