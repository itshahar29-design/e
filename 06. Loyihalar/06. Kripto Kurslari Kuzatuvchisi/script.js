const cryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "$68,450.00", change: "+3.45%", isUp: true, icon: "₿" },
    { name: "Ethereum", symbol: "ETH", price: "$3,520.10", change: "+1.82%", isUp: true, icon: "Ξ" },
    { name: "Toncoin", symbol: "TON", price: "$5.85", change: "+8.12%", isUp: true, icon: "💎" },
    { name: "Solana", symbol: "SOL", price: "$174.20", change: "-0.95%", isUp: false, icon: "◎" },
    { name: "Binance Coin", symbol: "BNB", price: "$585.00", change: "+0.45%", isUp: true, icon: "🔶" },
    { name: "Ripple", symbol: "XRP", price: "$0.54", change: "-2.10%", isUp: false, icon: "✕" }
];

function renderCryptos(list) {
    const container = document.getElementById('cryptoList');
    container.innerHTML = "";
    list.forEach(c => {
        container.innerHTML += `
            <div class="coin-card">
                <div class="coin-info">
                    <div class="coin-icon">${c.icon}</div>
                    <div>
                        <div class="coin-title">${c.name}</div>
                        <div class="coin-symbol">${c.symbol}</div>
                    </div>
                </div>
                <div class="coin-price">
                    <div>${c.price}</div>
                    <span class="change-badge ${c.isUp ? 'up' : 'down'}">${c.change}</span>
                </div>
            </div>
        `;
    });
}

function filterCrypto() {
    const q = document.getElementById('cryptoSearch').value.toLowerCase();
    const filtered = cryptos.filter(c => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q));
    renderCryptos(filtered);
}

renderCryptos(cryptos);