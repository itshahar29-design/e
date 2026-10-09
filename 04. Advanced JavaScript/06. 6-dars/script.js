// 06. RegEx Script
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

function testEmailRegex() {
    const email = document.getElementById('emailInput').value.trim();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = regex.test(email);

    if (isValid) {
        logConsole("'" + email + "' -> To'g'ri email formati! ✅", "info");
    } else {
        logConsole("'" + email + "' -> Noto'g'ri email formati! ❌", "error");
    }
}

function testPhoneRegex() {
    const phone = prompt("Telefon raqamingizni kiriting:", "+998901234567") || "+998901234567";
    const uzbPhoneRegex = /^\+998(9[012345789]|33|88)\d{7}$/;
    const isValid = uzbPhoneRegex.test(phone.trim());

    if (isValid) {
        logConsole(phone + " -> To'g'ri O'zbekiston raqami! 🇺🇿", "info");
    } else {
        logConsole(phone + " -> Noto'g'ri raqam formati! (+998901234567 bo'lishi kerak)", "error");
    }
}
