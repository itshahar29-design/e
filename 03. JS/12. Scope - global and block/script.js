// 12. Scope Script
let globalIsm = "Global O'zgaruvchi";

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

function testGlobalScope() {
    logConsole("Global o'zgaruvchiga murojaat: " + globalIsm, "info");
}

function testBlockScope() {
    clearConsole();
    if (true) {
        var xonadoshVar = "Men var orqali e'lon qilindim";
        let xonadoshLet = "Men let orqali e'lon qilindim";
    }

    logConsole("Blokdan tashqarida var: " + xonadoshVar + " (Xavfli sizib chiqish!)", "warn");
    try {
        logConsole("Blokdan tashqarida let: " + xonadoshLet);
    } catch(err) {
        logConsole("Blokdan tashqarida let: " + err.message + " (Block Scope xavfsiz himoya qildi!)", "info");
    }
}

function testScopeChain() {
    let shahar = "Toshkent";
    function tuman() {
        let tumanNomi = "Chilonzor";
        function mahalla() {
            let mahallaNomi = "Do'mbrobod";
            logConsole("Scope Chain bo'yicha eng ichki sohadan o'qildi: " + shahar + " -> " + tumanNomi + " -> " + mahallaNomi, "info");
        }
        mahalla();
    }
    tuman();
}
