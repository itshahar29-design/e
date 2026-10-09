// 19. XMLHttpRequest Script
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

function runXhrRequest() {
    clearConsole();
    logConsole("XMLHttpRequest obyekti yaratilmoqda...");
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        logConsole("readyState o'zgardi -> " + request.readyState);
        if (request.readyState === 4) {
            if (request.status === 200) {
                logConsole("Status: 200 OK! Ma'lumot qabul qilindi:", "info");
                logConsole(request.responseText);
            } else {
                logConsole("Xatolik! Status: " + request.status, "error");
            }
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}
