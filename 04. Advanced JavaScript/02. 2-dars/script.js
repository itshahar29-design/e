// 02. Create & Remove Elements Script
let itemCounter = 0;

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

function addNewItem() {
    itemCounter++;
    const container = document.getElementById('dynamicContainer');
    
    // 1. Element yaratish
    const badge = document.createElement('div');
    badge.className = 'dynamic-badge';
    badge.style.background = '#064e3b';
    badge.style.border = '1px solid #10b981';
    badge.style.color = '#34d399';
    badge.style.padding = '8px 14px';
    badge.style.borderRadius = '8px';
    badge.style.cursor = 'pointer';
    badge.innerHTML = "Blok #" + itemCounter + " <small style='color: #94a3b8;'>(bosilsa o'chadi)</small>";

    // Bosilganda o'chirish
    badge.onclick = function() {
        badge.remove();
        logConsole("Blok #" + itemCounter + " o'chirildi!", "error");
    };

    // 2. Sahifaga ulash
    container.appendChild(badge);
    logConsole("createElement('div') va appendChild muvaffaqiyatli bajarildi!", "info");
}

function removeLastItem() {
    const container = document.getElementById('dynamicContainer');
    if (container.lastElementChild) {
        container.lastElementChild.remove();
        logConsole("Oxirgi element o'chirildi.", "warn");
    } else {
        logConsole("O'chirish uchun element yo'q!", "warn");
    }
}
