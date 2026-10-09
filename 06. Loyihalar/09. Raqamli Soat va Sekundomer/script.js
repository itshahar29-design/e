// Clock
setInterval(() => {
    const d = new Date();
    document.getElementById('clockHeader').textContent = d.toLocaleTimeString();
}, 1000);

// Stopwatch
let startTime, timerInterval, elapsedTime = 0, isRunning = false;
let lapCount = 1;

function formatTime(ms) {
    const date = new Date(ms);
    const m = String(date.getUTCMinutes()).padStart(2, '0');
    const s = String(date.getUTCSeconds()).padStart(2, '0');
    const cs = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    return `${m}:${s}.${cs}`;
}

function toggleStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('swDisplay').textContent = formatTime(elapsedTime);
        }, 10);
        isRunning = true;
        document.getElementById('startBtn').textContent = "Pauza";
        document.getElementById('startBtn').style.background = "#f59e0b";
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById('startBtn').textContent = "Davom ettirish";
        document.getElementById('startBtn').style.background = "#10b981";
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    lapCount = 1;
    document.getElementById('swDisplay').textContent = "00:00:00.00";
    document.getElementById('startBtn').textContent = "Boshlash";
    document.getElementById('startBtn').style.background = "#10b981";
    document.getElementById('lapsList').innerHTML = "";
}

function recordLap() {
    if (!isRunning) return;
    const li = document.createElement('li');
    li.innerHTML = `<span>Aylana #${lapCount++}</span><span>${formatTime(elapsedTime)}</span>`;
    document.getElementById('lapsList').prepend(li);
}