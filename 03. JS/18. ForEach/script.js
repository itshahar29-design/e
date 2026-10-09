// 18. ForEach Script
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

const shaharlar = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Farg'ona"];

function runForEachDemo() {
    clearConsole();
    logConsole("shaharlar.forEach():");
    shaharlar.forEach((shahar, i) => {
        logConsole((i + 1) + "-shahar: " + shahar, "info");
    });
}

function renderProductCards() {
    const mahsulotlar = [
        { nom: "Noutbuk", narx: "$800" },
        { nom: "Telefon", narx: "$500" },
        { nom: "Quloqchin", narx: "$60" }
    ];

    const gallery = document.getElementById('cardsGallery');
    gallery.innerHTML = "";

    mahsulotlar.forEach((item, index) => {
        const card = document.createElement('div');
        card.style.background = "#1e293b";
        card.style.border = "1px solid #334155";
        card.style.padding = "12px 18px";
        card.style.borderRadius = "8px";
        card.style.color = "#f8fafc";
        card.innerHTML = "<h4 style='color: #38bdf8;'>" + (index + 1) + ". " + item.nom + "</h4><p style='color: #34d399; font-weight: bold;'>" + item.narx + "</p>";
        gallery.appendChild(card);
    });

    logConsole("forEach yordamida " + mahsulotlar.length + " ta mahsulot kartochkasi chizildi!", "info");
}
