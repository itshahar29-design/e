
    const rates = { USD: 1, UZS: 12700, EUR: 0.92 };
    window.calcCurr = () => {
        const val = parseFloat(document.getElementById('curr-amount').value) || 0;
        const from = document.getElementById('curr-from').value;
        const to = document.getElementById('curr-to').value;
        const inUSD = val / rates[from];
        const res = inUSD * rates[to];
        document.getElementById('curr-result').textContent = Math.round(res).toLocaleString() + ' ' + to;
    };
    calcCurr();
  