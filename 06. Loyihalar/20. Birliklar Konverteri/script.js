
    window.convertUnit = () => {
        const v = parseFloat(document.getElementById('unit-val').value) || 0;
        const from = document.getElementById('unit-from').value;
        const to = document.getElementById('unit-to').value;
        const toMeter = { m: 1, km: 1000, cm: 0.01, mi: 1609.34 };
        const meters = v * toMeter[from];
        const res = meters / toMeter[to];
        document.getElementById('unit-res').value = res.toLocaleString('uz-UZ', { maximumFractionDigits: 4 }) + ' ' + to;
    };
    convertUnit();
  