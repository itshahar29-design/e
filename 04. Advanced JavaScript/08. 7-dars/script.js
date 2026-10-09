// 08. KeyboardEvents Script
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

window.addEventListener('keydown', (e) => {
    const box = document.getElementById('keyBox');
    if (box) {
        box.textContent = e.key + " (code: " + e.code + ")";
    }
    logConsole("Klaviatura bosildi: key='" + e.key + "', code='" + e.code + "', keyCode=" + e.keyCode, "info");
});
