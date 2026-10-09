// 09. If-Else Script
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

function checkGrade() {
    const ball = parseInt(document.getElementById('gradeInput').value) || 0;
    logConsole("Kiritilgan ball: " + ball);

    if (ball >= 90) {
        logConsole("Natija: A'lo daraja! (A baho) 🏆", "info");
    } else if (ball >= 80) {
        logConsole("Natija: Yaxshi! (B baho) 🌟", "info");
    } else if (ball >= 70) {
        logConsole("Natija: Qoniqarli (C baho) 👍");
    } else if (ball >= 60) {
        logConsole("Natija: O'rtacha (D baho)", "warn");
    } else {
        logConsole("Natija: Qoniqarsiz (F baho). Qayta topshirish kerak!", "error");
    }
}

function checkPassFail() {
    const ball = parseInt(document.getElementById('gradeInput').value) || 0;
    const status = ball >= 60 ? "Muvaffaqiyatli O'tdi ✅" : "Imtihondan Yiqildi ❌";
    logConsole("Ternary Natijasi: " + status, ball >= 60 ? "info" : "error");
}
