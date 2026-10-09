// 06. Type Coercion Script
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

function testCrazyMath() {
    clearConsole();
    logConsole("'5' + 2 = " + ('5' + 2) + " (Qatorlar birlashdi)");
    logConsole("'5' - 2 = " + ('5' - 2) + " (Songa aylandi va ayrildi)");
    logConsole("true + 1 = " + (true + 1) + " (true songa aylandi: 1 + 1 = 2)");
    logConsole("false + 10 = " + (false + 10) + " (false songa aylandi: 0 + 10 = 10)");
    logConsole("null + 5 = " + (null + 5) + " (null 0 ga aylandi)");
    logConsole("undefined + 5 = " + (undefined + 5) + " (undefined songa aylanmaydi -> NaN)", "warn");
}

function testParse() {
    logConsole("Number('150px') -> " + Number('150px') + " (Harf borligi uchun NaN)", "error");
    logConsole("parseInt('150px') -> " + parseInt('150px') + " (Harfni tashlab faqat 150 ni oldi!)", "info");
    logConsole("parseFloat('12.8rem') -> " + parseFloat('12.8rem') + " (Kasr sonni to'liq oldi!)", "info");
}

function testUnaryPlus() {
    let str = "42";
    logConsole("str = '42', typeof: " + typeof str);
    let num = +str;
    logConsole("+str = " + num + ", typeof: " + typeof num, "info");
}
