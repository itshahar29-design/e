// Native JS yordamchi skripti
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
    if (box) box.innerHTML = '<div class="console-line">// Konsol tozalandi.</div>';
}

function demoDiffingAlgorithm() {
    clearConsole();
    logConsole("1. State o'zgardi (xotirada yangi Virtual DOM yaratildi)...", "info");
    logConsole("2. Diffing: Eski VDOM vs Yangi VDOM solishtirildi (faqat <span> o'zgargan!)", "warn");
    logConsole("3. Reconciliation: Real DOM dagi faqat bitta <span> tegi yangilandi! Reflow 0ms! ⚡", "info");
}
