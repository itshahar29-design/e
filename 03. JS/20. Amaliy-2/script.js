// 20. Amaliy-2 Script
let cart = [];

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

function addToCart(nom, narx) {
    const mavjud = cart.find(item => item.nom === nom);
    if (mavjud) {
        mavjud.miqdor += 1;
    } else {
        cart.push({ nom: nom, narx: narx, miqdor: 1 });
    }
    renderCart();
    logConsole(nom + " savatchaga qo'shildi!", "info");
}

function renderCart() {
    const listEl = document.getElementById('cartItemsList');
    const totalEl = document.getElementById('cartTotal');
    if (!listEl) return;

    if (cart.length === 0) {
        listEl.innerHTML = "Savatcha bo'sh";
        totalEl.textContent = "Jami: $0";
        return;
    }

    let html = "";
    let jamiSumma = 0;

    cart.forEach(item => {
        const itemSum = item.narx * item.miqdor;
        jamiSumma += itemSum;
        html += "<div style='display: flex; justify-content: space-between; margin-bottom: 4px;'>" +
            "<span>" + item.nom + " x " + item.miqdor + "</span>" +
            "<span>$" + itemSum + "</span>" +
        "</div>";
    });

    listEl.innerHTML = html;
    totalEl.textContent = "Jami: $" + jamiSumma;
}

function clearCart() {
    cart = [];
    renderCart();
    logConsole("Savatcha tozalandi.", "warn");
}
