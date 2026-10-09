
    const icons = ['🚀', '⚡', '🔥', '💎', '🎨', '🌟'];
    let cards = [], flipped = [], moves = 0, matches = 0;
    window.initMemory = () => {
        cards = [...icons, ...icons].sort(() => Math.random() - 0.5);
        flipped = []; moves = 0; matches = 0;
        document.getElementById('mem-moves').textContent = 0;
        document.getElementById('mem-matches').textContent = 0;
        const grid = document.getElementById('mem-grid');
        grid.innerHTML = '';
        cards.forEach((icon, i) => {
            const el = document.createElement('div');
            el.className = 'mem-card';
            el.dataset.icon = icon;
            el.dataset.id = i;
            el.onclick = () => flipCard(el);
            grid.appendChild(el);
        });
    };
    function flipCard(el) {
        if (flipped.length === 2 || el.classList.contains('flipped') || el.classList.contains('matched')) return;
        el.classList.add('flipped');
        el.textContent = el.dataset.icon;
        flipped.push(el);
        if (flipped.length === 2) {
            moves++;
            document.getElementById('mem-moves').textContent = moves;
            if (flipped[0].dataset.icon === flipped[1].dataset.icon) {
                flipped.forEach(c => c.classList.add('matched'));
                matches++;
                document.getElementById('mem-matches').textContent = matches;
                flipped = [];
                if (matches === 6) setTimeout(() => alert('Tabriklaymiz! Barchasini topdingiz!'), 300);
            } else {
                setTimeout(() => {
                    flipped.forEach(c => { c.classList.remove('flipped'); c.textContent = ''; });
                    flipped = [];
                }, 800);
            }
        }
    }
    initMemory();
  