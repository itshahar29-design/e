// 21. Object This Script
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

const robot = {
    model: "AI-2050",
    batareya: 95,
    statusOddiy: function() {
        return "Robot Model: " + this.model + " (Quvvat: " + this.batareya + "%)";
    },
    statusArrow: () => {
        return "Robot Model: " + this.model + " (Arrow funksiyada this yo'q!)";
    }
};

function testRegularThis() {
    clearConsole();
    logConsole(robot.statusOddiy(), "info");
    logConsole("Oddiy funksiyada this chaqiruvchi obyektga (robot) to'g'ri bog'landi!", "info");
}

function testArrowThis() {
    clearConsole();
    logConsole(robot.statusArrow(), "error");
    logConsole("⚠️ Ko'rib turganingizdek, model 'undefined' bo'lib qoldi, chunki arrow funksiya this ni o'z ichida saqlamaydi!", "warn");
}
