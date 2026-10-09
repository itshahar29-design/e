// 29. ClassList Script
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

function toggleActiveBadge() {
    const box = document.getElementById('badgeBox');
    const badge = document.getElementById('demoBadge');
    
    box.classList.toggle('active-mode');

    if (box.classList.contains('active-mode')) {
        box.style.background = "#064e3b";
        box.style.borderColor = "#34d399";
        badge.textContent = "🌟 FAOL HOLAT (Active Mode Yoqildi)";
        logConsole("classList.toggle: 'active-mode' QO'SHILDI ✅", "info");
    } else {
        box.style.background = "#1e293b";
        box.style.borderColor = "#334155";
        badge.textContent = "Oddiy Holat";
        logConsole("classList.toggle: 'active-mode' OLIB TASHLANDI ❌", "warn");
    }
}

function checkContains() {
    const box = document.getElementById('badgeBox');
    const hasClass = box.classList.contains('active-mode');
    logConsole("box.classList.contains('active-mode') -> " + hasClass, hasClass ? "info" : "error");
}
