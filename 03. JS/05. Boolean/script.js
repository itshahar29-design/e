// 05. Boolean Script
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

function checkTruthiness() {
    const sel = document.getElementById('boolSelect').value;
    let realVal;
    let label;

    switch(sel) {
        case '0': realVal = 0; label = '0'; break;
        case 'emptyStr': realVal = ""; label = '""'; break;
        case 'null': realVal = null; label = 'null'; break;
        case 'undefined': realVal = undefined; label = 'undefined'; break;
        case 'NaN': realVal = NaN; label = 'NaN'; break;
        case 'text0': realVal = "0"; label = '"0" (String)'; break;
        case 'emptyArr': realVal = []; label = '[] (Massiv)'; break;
        case 'emptyObj': realVal = {}; label = '{} (Obyekt)'; break;
        case 'space': realVal = " "; label = '" " (Bo\'sh joyli string)'; break;
    }

    const isTrue = Boolean(realVal);
    logConsole(label + " -> Boolean qiymati: " + isTrue, isTrue ? "info" : "error");
    if (!isTrue) {
        logConsole("⚡ Bu qiymat JavaScriptdagi 8 ta FALSY ro'yxatiga kiradi!", "warn");
    } else {
        logConsole("✨ Bu qiymat TRUTHY hisoblanadi (chunki u 8 ta falsy ro'yxatida yo'q)!", "info");
    }
}

function compareEquality() {
    logConsole("'5' == 5  -> " + ('5' == 5) + " (Kuchsiz tenglik: stringni avtomatik songa aylantirdi)", "warn");
    logConsole("'5' === 5 -> " + ('5' === 5) + " (Qat'iy tenglik: turlar mos kelmadi, xavfsiz!)", "info");
}
