// 11. Map and Filter Script
const narxlar = [20, 45, 80, 15, 120, 60];

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

function testMap() {
    clearConsole();
    logConsole("Asl narxlar: " + JSON.stringify(narxlar));
    const oshirilgan = narxlar.map(n => n * 2);
    logConsole("map(n => n * 2) natijasi: " + JSON.stringify(oshirilgan), "info");
}

function testFilter() {
    clearConsole();
    logConsole("Asl narxlar: " + JSON.stringify(narxlar));
    const qimmat = narxlar.filter(n => n >= 50);
    logConsole("filter(n => n >= 50) natijasi: " + JSON.stringify(qimmat), "warn");
}

function testChaining() {
    clearConsole();
    // 50 dan qimmatlarini olib, ularga 10% chegirma berish:
    const chegirmali = narxlar
        .filter(n => n >= 50)
        .map(n => (n * 0.9).toFixed(1));
    logConsole("Zanjir (filter + map) natijasi: " + JSON.stringify(chegirmali), "info");
}
