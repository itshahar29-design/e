// 13. LocalStorage Script
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

function saveToStorage() {
    const val = document.getElementById('storageInput').value;
    localStorage.setItem('userCustomNote', val);
    logConsole("LocalStorage.setItem('userCustomNote', '" + val + "') saqlandi! ✅", "info");
}

function readFromStorage() {
    const saved = localStorage.getItem('userCustomNote');
    if (saved) {
        logConsole("LocalStorage dan o'qildi: '" + saved + "'", "info");
    } else {
        logConsole("Xotirada hech narsa saqlanmagan!", "warn");
    }
}

function clearMyStorage() {
    localStorage.removeItem('userCustomNote');
    logConsole("userCustomNote o'chirildi.", "error");
}
