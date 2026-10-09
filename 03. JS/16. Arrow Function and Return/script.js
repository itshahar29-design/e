// 16. Arrow Function Script
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

const hisoblaKvadrat = x => x * x;

function testArrowSquare() {
    const n = parseFloat(document.getElementById('arrNum').value) || 0;
    const res = hisoblaKvadrat(n);
    logConsole(n + " ning kvadrati: " + res + " (x => x * x orqali hisoblandi)", "info");
}

function testArrowArray() {
    clearConsole();
    const sonlar = [1, 2, 3, 4, 5];
    const ikkilangan = sonlar.map(n => n * 2);
    logConsole("Asl massiv: " + JSON.stringify(sonlar));
    logConsole("sonlar.map(n => n * 2): " + JSON.stringify(ikkilangan), "warn");
}
