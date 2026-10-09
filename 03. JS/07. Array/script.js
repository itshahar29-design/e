// 07. Array Script
let techArray = ["HTML", "CSS", "JavaScript"];

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

function renderArray() {
    const el = document.getElementById('arrayDisplay');
    if (el) el.textContent = JSON.stringify(techArray);
}

function doPush() {
    const items = ["React", "Vue", "TypeScript", "Node.js", "Next.js"];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    techArray.push(randomItem);
    renderArray();
    logConsole("push('" + randomItem + "') bajarildi. Uzunlik: " + techArray.length, "info");
}

function doPop() {
    if (techArray.length === 0) {
        logConsole("Massiv bo'sh! pop() qilib bo'lmaydi.", "warn");
        return;
    }
    const removed = techArray.pop();
    renderArray();
    logConsole("pop() natijasida '" + removed + "' o'chirildi.", "error");
}

function doUnshift() {
    const randomGit = "Git-" + Math.floor(Math.random() * 100);
    techArray.unshift(randomGit);
    renderArray();
    logConsole("unshift('" + randomGit + "') boshiga qo'shildi.", "info");
}

function doShift() {
    if (techArray.length === 0) {
        logConsole("Massiv bo'sh! shift() qilib bo'lmaydi.", "warn");
        return;
    }
    const removed = techArray.shift();
    renderArray();
    logConsole("shift() birinchi element '" + removed + "' ni olib tashladi.", "error");
}
