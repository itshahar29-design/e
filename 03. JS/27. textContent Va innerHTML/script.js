// 27. textContent vs innerHTML Script
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

function applyTextContent() {
    const box = document.getElementById('targetBox');
    const snippet = "<h3>Bu xavfsiz matn: &lt;strong&gt;Teglar ishlamaydi&lt;/strong&gt;</h3>";
    box.textContent = snippet;
    logConsole("textContent qo'llandi: Barcha belgilar oddiy matn ko'rinishida chiqarildi (XAVFSIZ).", "info");
}

function applyInnerHTML() {
    const box = document.getElementById('targetBox');
    box.innerHTML = "<div style='color: #34d399; font-weight: bold;'>🎉 innerHTML haqiqiy HTML elementlarni chizdi!</div>";
    logConsole("innerHTML qo'llandi: HTML teglari brauzer tomonidan render qilindi.", "warn");
}
