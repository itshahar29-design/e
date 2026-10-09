// 13. Amaliyod Script
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

function runFizzBuzz() {
    clearConsole();
    logConsole("FizzBuzz (1 dan 20 gacha):");
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            logConsole(i + ": FizzBuzz 💥", "info");
        } else if (i % 3 === 0) {
            logConsole(i + ": Fizz 🍺");
        } else if (i % 5 === 0) {
            logConsole(i + ": Buzz 🐝");
        } else {
            logConsole(i + ": " + i);
        }
    }
}

function runReverseString() {
    const word = prompt("So'z kiriting:", "JavaScript") || "JavaScript";
    const reversed = word.split('').reverse().join('');
    logConsole("Asl so'z: " + word);
    logConsole("Teskari so'z: " + reversed, "info");
}

function runPalindrome() {
    const word = prompt("Palindrom tekshirish uchun so'z kiriting:", "alla") || "alla";
    const clean = word.toLowerCase().trim();
    const rev = clean.split('').reverse().join('');
    const isPal = clean === rev;
    logConsole("So'z: '" + word + "' -> Palindrommi? " + (isPal ? "HA! ✅" : "YO'Q ❌"), isPal ? "info" : "error");
}

function runFactorial() {
    const num = parseInt(prompt("Son kiriting (1-10):", "5")) || 5;
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    logConsole(num + "! (faktorial) = " + res, "info");
}
