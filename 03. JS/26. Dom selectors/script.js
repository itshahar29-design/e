// 26. DOM Selectors Script
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

function selectById() {
    const el = document.getElementById('uniqueSpan');
    if (el) {
        logConsole("getElementById('uniqueSpan') topildi! Matni: '" + el.textContent + "'", "info");
        el.style.fontWeight = 'bold';
        el.style.textDecoration = 'underline';
    }
}

function selectAllByQuery() {
    clearConsole();
    const list = document.querySelectorAll('.sample-p');
    logConsole("querySelectorAll('.sample-p') orqali " + list.length + " ta element topildi:", "warn");
    list.forEach((item, i) => {
        item.style.color = '#34d399';
        logConsole((i + 1) + "-element: " + item.textContent);
    });
}
