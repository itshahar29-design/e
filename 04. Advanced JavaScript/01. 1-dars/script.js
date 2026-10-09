// 01. Events Click Script
let count = 0;

function logConsole(msg, type = 'info') {
    const box = document.getElementById('consoleOutput');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'console-line ' + type;
    div.textContent = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function clearConsole() {
    const box = document.getElementById('consoleOutput');
    if (box) box.innerHTML = '<div class="console-line info">// Konsol tozalandi.</div>';
}

const btn = document.getElementById('clickCounterBtn');
const span = document.getElementById('clickCount');

if (btn) {
    btn.addEventListener('click', (e) => {
        count++;
        span.textContent = count;
        logConsole("Click hodisasi! Yangi hisob: " + count + " | Target: <" + e.target.tagName.toLowerCase() + ">", "info");
    });
}

function resetCounter() {
    count = 0;
    if (span) span.textContent = "0";
    clearConsole();
    logConsole("Hisoblagich nolga tenglashtirildi.", "warn");
}
