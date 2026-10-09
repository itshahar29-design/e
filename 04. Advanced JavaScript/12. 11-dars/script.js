// 12. Sort & Ternary Script
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

function testSortWrong() {
    clearConsole();
    const sonlar = [10, 5, 100, 25, 2];
    logConsole("Asl massiv: " + JSON.stringify(sonlar));
    const xato = [...sonlar].sort();
    logConsole("Oddiy .sort() natijasi: " + JSON.stringify(xato) + " (XATO! Alfavit bo'yicha saraladi)", "error");
}

function testSortAsc() {
    clearConsole();
    const sonlar = [10, 5, 100, 25, 2];
    const togri = [...sonlar].sort((a, b) => a - b);
    logConsole("To'g'ri saralash (a - b): " + JSON.stringify(togri), "info");
}

function testSortDesc() {
    clearConsole();
    const sonlar = [10, 5, 100, 25, 2];
    const kamayish = [...sonlar].sort((a, b) => b - a);
    logConsole("Kamayish tartibida (b - a): " + JSON.stringify(kamayish), "warn");
}
