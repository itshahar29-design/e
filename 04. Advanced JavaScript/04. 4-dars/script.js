// 04. Form Handling Script
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sampleForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Sahifani qayta yuklamaydi!
            const name = document.getElementById('formName').value.trim();
            const pass = document.getElementById('formPass').value;

            if (pass.length < 6) {
                logConsole("XATOLIK: Parol kamida 6 ta belgidan iborat bo'lishi kerak!", "error");
                return;
            }

            logConsole("Forma qabul qilindi!", "info");
            logConsole("Foydalanuvchi: " + name);
            logConsole("Parol uzunligi: " + pass.length + " ta belgi.");
            form.reset();
        });
    }
});
