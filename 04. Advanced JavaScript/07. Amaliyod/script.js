// 07. Amaliyod Script
let counterVal = 0;

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

function task1() {
    const ul = document.getElementById('sampleUl');
    const li = document.createElement('li');
    li.textContent = "Yangi element #" + (ul.children.length + 1);
    ul.appendChild(li);
    logConsole("1-topshiriq: Yangi <li> qo'shildi!", "info");
}

function task2() {
    const h = document.getElementById('targetHeading');
    h.textContent = "🎉 Sarlavha JavaScript orqali yangilandi!";
    h.style.color = "#34d399";
    logConsole("2-topshiriq: Sarlavha o'zgardi!", "info");
}

function task3() {
    counterVal++;
    logConsole("3-topshiriq: Hisoblagich: " + counterVal, "warn");
}

function task4() {
    logConsole("4-topshiriq: input.type = 'text' / 'password' orqali parol boshqariladi.", "info");
}
