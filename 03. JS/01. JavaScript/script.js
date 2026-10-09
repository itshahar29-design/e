// 01. JavaScript Darsi - To'liq Amaliy Kod
console.log("01. JavaScript darsi muvaffaqiyatli yuklandi!");

function logConsole(msg, type = 'info') {
    const box = document.getElementById('consoleOutput');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'console-line ' + type;
    div.textContent = typeof msg === 'object' ? JSON.stringify(msg) : msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function clearConsole() {
    const box = document.getElementById('consoleOutput');
    if (box) box.innerHTML = '<div class="console-line info">// Konsol tozalandi.</div>';
}

function demoVariables() {
    clearConsole();
    let ism = "Ali";
    const tugilganYil = 2004;
    let hozirgiYil = new Date().getFullYear();
    let yosh = hozirgiYil - tugilganYil;

    logConsole("Foydalanuvchi ma'lumotlari hisoblandi:", "info");
    logConsole("Ism: " + ism);
    logConsole("Tug'ilgan yil (const): " + tugilganYil);
    logConsole("Hozirgi yosh (hisoblangan let): " + yosh);
}

function demoAlert() {
    alert("Bu JavaScript alert() oynasi! Foydalanuvchiga muhim xabarlarni bildirish uchun ishlatiladi.");
    logConsole("alert() oynasi ko'rsatildi.", "warn");
}

function demoPrompt() {
    const ism = prompt("Iltimos, ismingizni kiriting:", "Sardor");
    if (ism) {
        logConsole("Foydalanuvchi kiritgan ism: " + ism, "info");
    } else {
        logConsole("Foydalanuvchi ism kiritmadi yoki bekor qildi.", "warn");
    }
}

function demoConfirm() {
    const rozimi = confirm("JavaScript o'rganishga tayyormisiz?");
    if (rozimi) {
        logConsole("Tasdiqlandi: Foydalanuvchi 'HA' deb javob berdi! Ajoyib!", "info");
    } else {
        logConsole("Rad etildi: Foydalanuvchi 'YO'Q' deb javob berdi.", "error");
    }
}
