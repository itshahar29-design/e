
    function runRegex() {
        try {
            const pat = document.getElementById('rgx-pattern').value;
            const txt = document.getElementById('rgx-text').value;
            const re = new RegExp(pat, 'g');
            const matches = txt.match(re) || [];
            document.getElementById('rgx-matches').innerHTML = matches.length
                ? matches.map(m => `<div style="padding:4px 8px; background:#1e293b; border-radius:4px; display:inline-block; margin:4px;">${m}</div>`).join(' ')
                : 'Hech narsa topilmadi';
        } catch (e) {
            document.getElementById('rgx-matches').textContent = 'Xato ifoda: ' + e.message;
        }
    }
    document.getElementById('rgx-pattern').oninput = runRegex;
    document.getElementById('rgx-text').oninput = runRegex;
    runRegex();
  