// 02. String and Number Script
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

function testUpperCase() {
    const val = document.getElementById('strInput').value;
    logConsole("Asl matn: " + val);
    logConsole("Katta harflar: " + val.toUpperCase(), "warn");
    logConsole("Kichik harflar: " + val.toLowerCase());
}

function testSlice() {
    const val = document.getElementById('strInput').value;
    const sliced = val.slice(0, 8);
    logConsole("slice(0, 8) natijasi: '" + sliced + "'", "info");
    logConsole("Belgilar soni (length): " + val.length);
}

function testIncludes() {
    const val = document.getElementById('strInput').value;
    const hasWord = val.includes("End");
    logConsole("Matnda 'End' so'zi bormi? -> " + hasWord, hasWord ? "info" : "error");
}

function testMathCalc() {
    clearConsole();
    let a = 17;
    let b = 5;
    logConsole("a = 17, b = 5");
    logConsole("a + b = " + (a + b));
    logConsole("a % b (qoldiq) = " + (a % b));
    logConsole("a ** 2 (kvadrat) = " + (a ** 2));
    logConsole("0.1 + 0.2 = " + (0.1 + 0.2) + " (Suzuvchi nuqta effekti)");
    logConsole("To'g'rilangan: " + (0.1 + 0.2).toFixed(2));
}
