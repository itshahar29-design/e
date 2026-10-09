// 22. Array of Objects Script
const usersDb = [
    { id: 101, ism: "Shavkat", yosh: 28, kasb: "Backend", faol: true },
    { id: 102, ism: "Zilola", yosh: 22, kasb: "Frontend", faol: false },
    { id: 103, ism: "Farrux", yosh: 35, kasb: "DevOps", faol: true },
    { id: 104, ism: "Shahnoza", yosh: 20, kasb: "Designer", faol: true }
];

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

function showAllUsers() {
    clearConsole();
    logConsole("Barcha foydalanuvchilar (" + usersDb.length + " ta):");
    usersDb.forEach(u => logConsole(u.id + " | " + u.ism + " | " + u.yosh + " yosh | " + u.kasb + " | Faol: " + u.faol));
}

function filterActiveUsers() {
    clearConsole();
    const actives = usersDb.filter(u => u.faol);
    logConsole("Faol foydalanuvchilar soni: " + actives.length, "info");
    actives.forEach(u => logConsole("✅ " + u.ism + " (" + u.kasb + ")"));
}

function sortByAge() {
    clearConsole();
    const sorted = [...usersDb].sort((a, b) => a.yosh - b.yosh);
    logConsole("Yosh bo'yicha saralangan (kichikdan kattaga):", "warn");
    sorted.forEach(u => logConsole(u.ism + " -> " + u.yosh + " yosh"));
}
