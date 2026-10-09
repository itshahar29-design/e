// 14. Date Script
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

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    
    const clockEl = document.getElementById('liveClock');
    const dateEl = document.getElementById('liveDate');
    
    if (clockEl) clockEl.textContent = h + ":" + m + ":" + s;
    if (dateEl) dateEl.textContent = now.toLocaleDateString('uz-UZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

setInterval(updateClock, 1000);
updateClock();

function inspectCurrentDate() {
    clearConsole();
    const now = new Date();
    logConsole("Yil: " + now.getFullYear());
    logConsole("Oy (0-11): " + now.getMonth() + " (Haqiqiy oy: " + (now.getMonth() + 1) + ")");
    logConsole("Kun: " + now.getDate());
    logConsole("Timestamp (ms): " + Date.now(), "info");
}
