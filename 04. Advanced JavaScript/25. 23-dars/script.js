// 25. Loading State Script
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

function simulateLoadingProcess() {
    clearConsole();
    const container = document.getElementById('loadingStatusContainer');
    container.innerHTML = "<div style='color: #fbbf24; display: flex; align-items: center; gap: 8px;'><i class='fa-solid fa-circle-notch fa-spin'></i> Ma'lumotlar yuklanmoqda...</div>";
    logConsole("1. [Loading: true] Spinner yoqildi.", "warn");

    setTimeout(() => {
        container.innerHTML = "<div style='color: #34d399; font-weight: bold;'><i class='fa-solid fa-check-circle'></i> Ma'lumotlar muvaffaqiyatli yuklandi!</div>";
        logConsole("2. [Loading: false] Ma'lumotlar yetib keldi!", "info");
    }, 1500);
}
