// 10. KeyCode Inspector Script
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
    const keyVal = e.key === ' ' ? 'Space' : e.key;
    document.getElementById('inspKey').textContent = keyVal;
    document.getElementById('inspCode').textContent = e.code;
    document.getElementById('inspKeyCode').textContent = e.keyCode;

    logConsole("Inspeksiya: key=" + keyVal + " | code=" + e.code + " | keyCode=" + e.keyCode, "info");
});
