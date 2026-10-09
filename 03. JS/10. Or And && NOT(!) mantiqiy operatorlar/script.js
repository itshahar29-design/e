// 10. Logical Operators Script
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

function testAnd() {
    let yosh = 22;
    let haydovchilikGuvohnomasiBor = true;
    logConsole("Yosh: 22, Prava: bor");
    if (yosh >= 18 && haydovchilikGuvohnomasiBor) {
        logConsole("&& Natija: Mashina haydashga ruxsat berildi! ✅", "info");
    } else {
        logConsole("&& Natija: Ruxsat yo'q ❌", "error");
    }
}

function testOr() {
    let kuponBor = false;
    let maxsusAksiya = true;
    logConsole("Kupon: yo'q, Aksiya: bor");
    if (kuponBor || maxsusAksiya) {
        logConsole("|| Natija: Chegirma berildi! (Kamida bittasi rost) 🎁", "info");
    } else {
        logConsole("|| Natija: Chegirma yo'q.", "warn");
    }
}

function testNot() {
    let tizimgaKirganmi = false;
    logConsole("tizimgaKirganmi = false;");
    logConsole("!tizimgaKirganmi = " + (!tizimgaKirganmi) + " (Inkor orqali true ga aylandi)", "info");
}

function testShortCircuit() {
    clearConsole();
    let ism = "";
    let standartNom = ism || "Noma'lum Mehmon";
    logConsole("ism = '' bo'lganda: ism || 'Noma\'lum Mehmon' -> '" + standartNom + "'", "info");

    let userRole = "admin";
    logConsole("userRole === 'admin' && 'Foydalanuvchilarni o\'chirish mumkin' -> " + (userRole === 'admin' && "O'chirish mumkin!"), "warn");
}
