
    window.calcTip = () => {
        const bill = parseFloat(document.getElementById('bill-amount').value);
        const tip = parseFloat(document.getElementById('tip-pct').value);
        const people = parseInt(document.getElementById('people-count').value) || 1;
        if (!bill) return;
        const total = bill + (bill * tip);
        const per = total / people;
        document.getElementById('per-person').textContent = Math.round(per).toLocaleString() + " so'm";
    };
  