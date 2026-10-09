// 15. Function Script
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

function qoshish(a, b) {
    return a + b;
}

function kopaytirish(a, b) {
    return a * b;
}

function calcSum() {
    const a = parseFloat(document.getElementById('numA').value) || 0;
    const b = parseFloat(document.getElementById('numB').value) || 0;
    const natija = qoshish(a, b);
    logConsole(a + " + " + b + " = " + natija, "info");
}

function calcMultiply() {
    const a = parseFloat(document.getElementById('numA').value) || 0;
    const b = parseFloat(document.getElementById('numB').value) || 0;
    const natija = kopaytirish(a, b);
    logConsole(a + " * " + b + " = " + natija, "info");
}

function xushKelibsiz(foydalanuvchi = "Hurmatli Mehmon") {
    return "Xush kelibsiz, " + foydalanuvchi + "!";
}

function testDefaultParams() {
    clearConsole();
    logConsole(xushKelibsiz("Dilshod") + " (Argument berildi)");
    logConsole(xushKelibsiz() + " (Argument berilmadi -> Default qiymat ishlatildi)", "warn");
}
