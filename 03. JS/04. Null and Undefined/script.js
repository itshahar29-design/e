// 04. Null and Undefined Script
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

function testUndefined() {
    let x;
    logConsole("let x; e'lon qilindi.");
    logConsole("x qiymati: " + x);
    logConsole("typeof x: " + typeof x, "warn");
}

function testNull() {
    let y = null;
    logConsole("let y = null; e'lon qilindi.");
    logConsole("y qiymati: " + y);
    logConsole("typeof y: " + typeof y + " (JavaScript ning 1995-yildan beri tuzatilmagan tarixiy xatosi!)", "error");
}

function testComparison() {
    logConsole("null == undefined -> " + (null == undefined) + " (Kuchsiz tenglik bo'yicha ikkisi ham bo'sh)");
    logConsole("null === undefined -> " + (null === undefined) + " (Qat'iy tenglik bo'yicha har xil turlar!)", "warn");
}

function testNullish() {
    clearConsole();
    let foydalanuvchiBaho = 0; // 0 haqiqiy baho!
    let natijaOR = foydalanuvchiBaho || "Baho kiritilmadi";
    let natijaNullish = foydalanuvchiBaho ?? "Baho kiritilmadi";

    logConsole("Asl qiymat: 0");
    logConsole("OR (||) bilan: " + natijaOR + " (XATO! 0 ni yolg'on deb o'ylab yubordi)", "error");
    logConsole("Nullish (??) bilan: " + natijaNullish + " (TO'G'RI! Chunki 0 null emas)", "info");
}
