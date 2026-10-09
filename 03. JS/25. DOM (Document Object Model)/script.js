// 25. DOM Script
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

function inspectDocument() {
    clearConsole();
    logConsole("document.URL: " + document.URL);
    logConsole("document.title: " + document.title);
    logConsole("document.characterSet: " + document.characterSet);
    logConsole("document.contentType: " + document.contentType, "info");
}

function inspectBodyChildren() {
    clearConsole();
    logConsole("document.body dagi elementlar soni: " + document.body.children.length);
    for (let i = 0; i < document.body.children.length; i++) {
        logConsole("Element #" + (i + 1) + ": <" + document.body.children[i].tagName.toLowerCase() + ">");
    }
}
