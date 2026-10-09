
    window.calcLoan = () => {
        const P = parseFloat(document.getElementById('loan-amount').value);
        const r = (parseFloat(document.getElementById('loan-rate').value) / 100) / 12;
        const n = parseInt(document.getElementById('loan-months').value);
        if (!P || !r || !n) return;
        const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const total = monthly * n;
        document.getElementById('monthly-pay').textContent = Math.round(monthly).toLocaleString() + " so'm";
        document.getElementById('total-pay').textContent = Math.round(total).toLocaleString() + " so'm";
    };
    calcLoan();
  