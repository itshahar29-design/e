// 24. Amaliy-3 Script
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let isGameOver = false;

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

function submitGuess() {
    if (isGameOver) {
        logConsole("O'yin yakunlangan! Yangi o'yin boshlash tugmasini bosing.", "warn");
        return;
    }

    const input = document.getElementById('guessInput');
    const status = document.getElementById('gameStatus');
    const counter = document.getElementById('attemptsCounter');
    const guess = parseInt(input.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        logConsole("Iltimos, 1 dan 100 gacha haqiqiy son kiriting!", "error");
        return;
    }

    attempts++;
    counter.textContent = "Urinishlar soni: " + attempts;

    if (guess === secretNumber) {
        status.innerHTML = "🎉 TABRIKLAYMIZ! Yashirin son: <strong>" + secretNumber + "</strong> edi! Siz uni <strong>" + attempts + "</strong> ta urinishda topdingiz!";
        status.style.color = "#34d399";
        logConsole("YUTUQ! " + attempts + " ta urinishda to'g'ri topildi!", "info");
        isGameOver = true;
    } else if (guess < secretNumber) {
        status.textContent = "KATTAROQ son kiriting! ⬆️";
        status.style.color = "#fbbf24";
        logConsole(guess + " -> Juda kichik! Kattaroq son kiriting.");
    } else {
        status.textContent = "KICHIKROQ son kiriting! ⬇️";
        status.style.color = "#fbbf24";
        logConsole(guess + " -> Juda katta! Kichikroq son kiriting.");
    }

    input.value = "";
    input.focus();
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    isGameOver = false;
    document.getElementById('gameStatus').textContent = "Yangi o'yin boshlandi! 1 dan 100 gacha son o'ylandi.";
    document.getElementById('gameStatus').style.color = "#38bdf8";
    document.getElementById('attemptsCounter').textContent = "Urinishlar soni: 0";
    clearConsole();
    logConsole("Yangi o'yin boshlandi. Yashirin son yangilandi!", "info");
}
