// 09. Random Color Script
let currentColor = '#10B981';

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

function generateNewColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    currentColor = color;

    document.getElementById('colorCard').style.background = color;
    document.getElementById('colorHexText').textContent = color;
    logConsole("Yangi rang yaratildi: " + color, "info");
}

function copyColorCode() {
    navigator.clipboard.writeText(currentColor).then(() => {
        logConsole("Nusxa olindi: " + currentColor + " buferga ko'chirildi! 📋", "warn");
    });
}
