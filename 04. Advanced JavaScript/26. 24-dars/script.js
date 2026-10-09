// 26. Final Exam Script
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

function loadDummyProducts() {
    clearConsole();
    const grid = document.getElementById('dummyProductsGrid');
    const counter = document.getElementById('dummyCounter');
    grid.innerHTML = "<div style='color: #38bdf8;'>DummyJSON dan yuklanmoqda...</div>";

    fetch('https://dummyjson.com/products?limit=6')
        .then(res => res.json())
        .then(data => {
            grid.innerHTML = "";
            counter.textContent = "Tovarlar: " + data.products.length + " ta";
            logConsole("DummyJSON: " + data.products.length + " ta mahsulot yuklandi!", "info");

            data.products.forEach(p => {
                const item = document.createElement('div');
                item.style.background = "#0f172a";
                item.style.border = "1px solid #334155";
                item.style.borderRadius = "8px";
                item.style.padding = "12px";
                item.style.textAlign = "center";
                item.innerHTML = 
                    "<img src='" + p.thumbnail + "' style='height: 100px; object-fit: cover; border-radius: 6px; margin-bottom: 6px;' alt='tovar'>" +
                    "<h4 style='color: #f8fafc; font-size: 0.9rem; height: 35px; overflow: hidden;'>" + p.title + "</h4>" +
                    "<div style='color: #10b981; font-weight: bold;'>$" + p.price + " <span style='color: #fbbf24; font-size: 0.8rem;'>★ " + p.rating + "</span></div>";
                grid.appendChild(item);
            });
        })
        .catch(err => {
            grid.innerHTML = "";
            logConsole("Xatolik: " + err.message, "error");
        });
}
