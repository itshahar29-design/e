
    let grid = Array(16).fill(0), score = 0;
    function addRand() {
        const empties = grid.map((v, i) => v === 0 ? i : null).filter(v => v !== null);
        if (empties.length) grid[empties[Math.floor(Math.random() * empties.length)]] = Math.random() < 0.9 ? 2 : 4;
    }
    function render2048() {
        const el = document.getElementById('g2048-grid');
        el.innerHTML = '';
        grid.forEach(v => {
            const c = document.createElement('div');
            c.className = 'cell-2048';
            c.textContent = v ? v : '';
            if (v >= 8) c.style.background = '#eab308';
            if (v >= 64) c.style.background = '#f97316';
            if (v >= 512) c.style.background = '#ef4444';
            el.appendChild(c);
        });
    }
    addRand(); addRand(); render2048();
  