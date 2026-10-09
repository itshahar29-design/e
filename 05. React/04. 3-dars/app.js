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

function demoJsxRules() {
    clearConsole();
    logConsole("JSX 5 Qoidasi eslatmasi:", "info");
    logConsole("1. Single Root: <>...</>");
    logConsole("2. Self-closing: <img />");
    logConsole("3. className (class emas!)");
    logConsole("4. { jsExpression }");
    logConsole("5. Capitalized Component Name: <MyCard />", "warn");
}
