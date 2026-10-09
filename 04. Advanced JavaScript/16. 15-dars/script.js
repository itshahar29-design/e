// 16. Async Event Loop Script
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

function testAsyncExecution() {
    clearConsole();
    logConsole("1. Sinxron kod boshlandi (Call Stack)", "info");

    setTimeout(() => {
        logConsole("4. setTimeout (0ms) yetib keldi (Task Queue -> Event Loop) ⏳", "warn");
    }, 0);

    Promise.resolve().then(() => {
        logConsole("3. Promise Microtask yetib keldi! (Microtask Queue) 🚀", "info");
    });

    logConsole("2. Sinxron kod tugadi (Call Stack bo'shadi)", "info");
}
