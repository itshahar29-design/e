// 24. Live Product Search Script
const sampleProds = [
    { nom: "iPhone 15 Pro", narx: "$1100", kat: "Elektronika" },
    { nom: "Samsung Galaxy S24", narx: "$950", kat: "Elektronika" },
    { nom: "JavaScript Dasturlash Kitobi", narx: "$25", kat: "Kitob" },
    { nom: "Sport Kiyimi Nike", narx: "$60", kat: "Kiyim" },
    { nom: "Simsiz Quloqchin Sony", narx: "$150", kat: "Elektronika" }
];

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

function renderProductCards(list) {
    const area = document.getElementById('filteredProductsList');
    if (!area) return;
    area.innerHTML = "";

    if (list.length === 0) {
        area.innerHTML = "<div style='color: #ef4444;'>Hech narsa topilmadi</div>";
        return;
    }

    list.forEach(p => {
        const item = document.createElement('div');
        item.style.background = "#0f172a";
        item.style.border = "1px solid #334155";
        item.style.padding = "10px 14px";
        item.style.borderRadius = "8px";
        item.innerHTML = "<strong style='color: #38bdf8;'>" + p.nom + "</strong><br><span style='color: #34d399;'>" + p.narx + "</span> <small style='color: #94a3b8;'>(" + p.kat + ")</small>";
        area.appendChild(item);
    });
}

function filterDemoProducts() {
    const query = document.getElementById('liveSearchInput').value.toLowerCase().trim();
    const natija = sampleProds.filter(p => p.nom.toLowerCase().includes(query));
    renderProductCards(natija);
    logConsole("Qidiruv: '" + query + "' -> " + natija.length + " ta natija.", "info");
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductCards(sampleProds);
});
