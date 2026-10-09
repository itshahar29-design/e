// 23. OOP Script
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

class Inson {
    constructor(ism, kasb) {
        this.ism = ism;
        this.kasb = kasb;
    }
    tanishtir() {
        return "Salom, men " + this.ism + " (" + this.kasb + ")";
    }
}

class Developer extends Inson {
    constructor(ism, til) {
        super(ism, "Dasturchi");
        this.til = til;
    }
    yozish() {
        return this.ism + " " + this.til + " tilida ajoyib loyiha yozmoqda! 💻";
    }
}

function testClassUser() {
    clearConsole();
    const bobur = new Inson("Bobur", "Shifokor");
    logConsole(bobur.tanishtir(), "info");
}

function testClassInheritance() {
    clearConsole();
    const kamol = new Developer("Kamol", "React / JavaScript");
    logConsole(kamol.tanishtir());
    logConsole(kamol.yozish(), "info");
}
