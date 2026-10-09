// 23. Math Object Script
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

function genRandomInRange() {
    const min = parseInt(document.getElementById('minVal').value) || 1;
    const max = parseInt(document.getElementById('maxVal').value) || 100;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    logConsole("Oraliq [" + min + " - " + max + "] -> Tasodifiy Son: " + random, "info");
}

function compareRounding() {
    clearConsole();
    const val = 4.7;
    logConsole("Son: " + val);
    logConsole("Math.round(" + val + ") = " + Math.round(val) + " (Eng yaqin butun songa)");
    logConsole("Math.floor(" + val + ") = " + Math.floor(val) + " (Doim pastga)");
    logConsole("Math.ceil(" + val + ") = " + Math.ceil(val) + " (Doim yuqoriga)");
    logConsole("Math.trunc(" + val + ") = " + Math.trunc(val) + " (Kasr qismi olib tashlandi)", "warn");
}
