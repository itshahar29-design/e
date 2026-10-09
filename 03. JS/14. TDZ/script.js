// 14. TDZ Script
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

function demoVarHoisting() {
    clearConsole();
    logConsole("console.log(testVar) qatorini e'londan oldin chaqiramiz:");
    // Simulyatsiya:
    logConsole("Natija: undefined (Chunki var e'loni ko'tarildi va avtomatik undefined bo'ldi)", "warn");
}

function demoTdzError() {
    clearConsole();
    logConsole("let bilan e'lon qilingan o'zgaruvchiga e'londan oldin murojaat qilamiz:");
    try {
        // TDZ simulyatsiyasi
        eval("console.log(tdzTestVariable); let tdzTestVariable = 'salom';");
    } catch(err) {
        logConsole("XATOLIK: " + err.name + " - " + err.message, "error");
        logConsole("⚡ O'zgaruvchi TDZ (Temporal Dead Zone) ichida bo'lgani uchun unga murojaat qilish taqiqlandi!", "info");
    }
}

function demoFunctionHoisting() {
    clearConsole();
    salomBer(); // E'londan oldin chaqirildi!
    function salomBer() {
        logConsole("Assalomu alaykum! Function Declaration to'liq tanasi bilan ko'tariladi!", "info");
    }
}
