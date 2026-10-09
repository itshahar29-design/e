// 21. Promise & Fetch Script
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

function runFetchUsers() {
    clearConsole();
    logConsole("fetch('.../users') yuborildi...", "info");
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            logConsole(data.length + " ta foydalanuvchi qabul qilindi!", "info");
            data.slice(0, 3).forEach(u => logConsole("👤 " + u.name + " (" + u.email + ")"));
        })
        .catch(err => logConsole("Xatolik: " + err.message, "error"));
}

function simulatePromise() {
    clearConsole();
    logConsole("Yangi Promise boshlandi...");
    const va'da = new Promise((resolve, reject) => {
        setTimeout(() => {
            const muvaffaqiyat = true;
            if (muvaffaqiyat) resolve("Va'da muvaffaqiyatli bajarildi! 🏆");
            else reject("Va'da bajarilmadi ❌");
        }, 1000);
    });

    va'da
        .then(res => logConsole(res, "info"))
        .catch(err => logConsole(err, "error"))
        .finally(() => logConsole("Jarayon 100% tugadi.", "warn"));
}
