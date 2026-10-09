// 19. Object Script
let talaba = {
    ism: "Jasur",
    yosh: 21,
    fakultet: "Dasturiy Injiniring",
    kurs: 3,
    baho: 88
};

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

function renderJson() {
    const el = document.getElementById('objJsonView');
    if (el) el.textContent = JSON.stringify(talaba, null, 2);
}

function inspectUserObject() {
    clearConsole();
    logConsole("talaba obyekti ko'rib chiqilmoqda:");
    logConsole("Ism: " + talaba.ism);
    logConsole("Fakultet: " + talaba.fakultet);
    logConsole("Kurs: " + talaba.kurs);
    renderJson();
}

function addProperty() {
    talaba.stipendiya = "600,000 so'm";
    talaba.grantmi = true;
    renderJson();
    logConsole("Yangi xususiyatlar (stipendiya, grantmi) qo'shildi!", "info");
}

function deleteProperty() {
    delete talaba.baho;
    renderJson();
    logConsole("delete talaba.baho bajarildi!", "error");
}
