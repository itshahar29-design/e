// 08. Loop Script
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

function runForLoop() {
    clearConsole();
    logConsole("for tsikli ishga tushdi:");
    for (let i = 1; i <= 5; i++) {
        logConsole("Iteratsiya #" + i + ": Kod bajarildi.");
    }
}

function runBreakDemo() {
    clearConsole();
    logConsole("break amali: 1 dan 10 gacha aylanamiz, lekin i === 3 bo'lganda to'xtaymiz:");
    for (let i = 1; i <= 10; i++) {
        if (i === 3) {
            logConsole("To'xtatish: i === 3 ga yetdi, break chaqirildi!", "error");
            break;
        }
        logConsole("i = " + i);
    }
}

function runContinueDemo() {
    clearConsole();
    logConsole("continue amali: 1 dan 8 gacha bo'lgan toq sonlarni chiqaramiz:");
    for (let i = 1; i <= 8; i++) {
        if (i % 2 === 0) {
            logConsole("i = " + i + " juft bo'lgani uchun o'tkazib yuborildi (continue).", "warn");
            continue;
        }
        logConsole("Toq son: " + i, "info");
    }
}
