// 22. FakeStore Script
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

function fetchFakeStoreProducts() {
    clearConsole();
    const gallery = document.getElementById('fakeStoreGallery');
    gallery.innerHTML = "<div style='color: #38bdf8;'>Yuklanmoqda...</div>";

    fetch('https://fakestoreapi.com/products?limit=4')
        .then(res => res.json())
        .then(products => {
            gallery.innerHTML = "";
            logConsole(products.length + " ta tovar FakeStore dan yuklandi!", "info");
            products.forEach(p => {
                const card = document.createElement('div');
                card.style.background = "#1e293b";
                card.style.border = "1px solid #334155";
                card.style.borderRadius = "10px";
                card.style.padding = "14px";
                card.style.textAlign = "center";
                card.innerHTML = 
                    "<img src='" + p.image + "' style='height: 120px; object-fit: contain; margin-bottom: 8px;' alt='tovar'>" +
                    "<h4 style='color: #f8fafc; font-size: 0.95rem; height: 40px; overflow: hidden;'>" + p.title + "</h4>" +
                    "<div style='color: #34d399; font-weight: bold; margin-top: 8px;'>$" + p.price + "</div>";
                gallery.appendChild(card);
            });
        })
        .catch(err => {
            gallery.innerHTML = "";
            logConsole("Tarmoq xatosi: " + err.message, "error");
        });
}
