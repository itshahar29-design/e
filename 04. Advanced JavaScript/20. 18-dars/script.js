// 20. Status Codes Script
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

function testSuccessStatus() {
    clearConsole();
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            logConsole("Status: " + res.status + " (res.ok: " + res.ok + ")", "info");
            return res.json();
        })
        .then(data => logConsole("Ma'lumot: " + data.title));
}

function test404Status() {
    clearConsole();
    fetch('https://jsonplaceholder.typicode.com/not-exist-endpoint-404')
        .then(res => {
            logConsole("Status: " + res.status + " (Topilmadi!)", "error");
        })
        .catch(err => logConsole("Tarmoq xatosi: " + err.message, "error"));
}
