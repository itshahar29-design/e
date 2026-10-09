// 18. AJAX Script
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

function demoAjaxFlow() {
    clearConsole();
    logConsole("1. [Mijoz] Serverga HTTP GET so'rov yubordi...", "info");
    setTimeout(() => {
        logConsole("2. [Server] So'rovni qabul qildi va ma'lumotlar bazasini tekshirdi...", "warn");
        setTimeout(() => {
            logConsole("3. [Mijoz] 200 OK javobi (JSON formatida) qabul qilindi va sahifa yangilanmasdan DOM ga chizildi! ✅", "info");
        }, 600);
    }, 600);
}
