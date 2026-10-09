// 11. Switch Case Script
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

function checkDay() {
    const day = parseInt(document.getElementById('daySelect').value);
    logConsole("Tanlangan raqam: " + day);

    switch(day) {
        case 1:
            logConsole("Bugun: Dushanba - Yangi ish haftasi boshlanishi!");
            break;
        case 2:
            logConsole("Bugun: Seshanba - Rejalar bo'yicha ishlash.");
            break;
        case 3:
            logConsole("Bugun: Chorshanba - Hafta o'rtasi.");
            break;
        case 4:
            logConsole("Bugun: Payshanba - Katta natijalar kuni.");
            break;
        case 5:
            logConsole("Bugun: Juma - Muborak kun va hafta yakuni!", "info");
            break;
        case 6:
        case 7:
            logConsole("Dam olish kuni! Maroqli dam oling! 🏖️", "warn");
            break;
        default:
            logConsole("default: Bunday hafta kuni mavjud emas!", "error");
    }
}

function checkTraffic() {
    const colors = ["qizil", "sariq", "yashil"];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    logConsole("Svetofor chirog'i: " + currentColor.toUpperCase());

    switch(currentColor) {
        case "qizil":
            logConsole("TO'XTA! Yo'l yopiq 🛑", "error");
            break;
        case "sariq":
            logConsole("TAYYORLAN! ⚠️", "warn");
            break;
        case "yashil":
            logConsole("HARAKATLAN! Yo'l ochiq 🟢", "info");
            break;
    }
}
