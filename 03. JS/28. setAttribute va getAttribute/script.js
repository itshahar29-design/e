// 28. Attributes Script
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

function readAttributes() {
    clearConsole();
    const link = document.getElementById('demoLink');
    logConsole("href: " + link.getAttribute('href'));
    logConsole("target: " + link.getAttribute('target'));
    logConsole("dataset.id: " + link.dataset.id, "info");
    logConsole("dataset.category: " + link.dataset.category, "info");
}

function changeAttributes() {
    const link = document.getElementById('demoLink');
    link.setAttribute('href', 'https://github.com');
    link.textContent = "Bu Yangilangan Havola (GitHub)";
    logConsole("setAttribute('href', 'https://github.com') muvaffaqiyatli bajarildi!", "warn");
}
