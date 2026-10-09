// 03. Template String Script
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

function generateTemplate() {
    const ism = document.getElementById('tplName').value;
    const yosh = parseInt(document.getElementById('tplAge').value) || 0;
    const kasb = document.getElementById('tplJob').value;

    const shablon = `Salom! Mening ismim ${ism}, yoshim ${yosh} da. Kasbim: ${kasb}. Kelasi yili men ${yosh + 1} yoshga to'laman!`;
    
    logConsole(shablon, "info");

    const card = document.getElementById('dynamicCardArea');
    card.innerHTML = `
        <div style="background: #1e293b; border: 1px solid #38bdf8; padding: 16px; border-radius: 10px;">
            <h4 style="color: #38bdf8; margin-bottom: 6px;">👤 ${ism}</h4>
            <p style="color: #cbd5e1;">Yosh: <strong>${yosh}</strong> | Kasb: <strong>${kasb}</strong></p>
            <p style="color: #34d399; margin-top: 6px;">Holat: ${yosh >= 18 ? 'Katta yoshli mutaxassis ✅' : 'Yosh iqtidor 🌟'}</p>
        </div>
    `;
}
