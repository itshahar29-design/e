
    const words = ['REACT', 'JAVASCRIPT', 'FRONTEND', 'PYTHON', 'NODEJS'];
    let chosen = words[Math.floor(Math.random() * words.length)];
    let guessed = [], lives = 6;

    function renderHang() {
        let display = '';
        for (const l of chosen) display += (guessed.includes(l) ? l : '_') + ' ';
        document.getElementById('hang-word').textContent = display;
        document.getElementById('hang-lives').textContent = lives;
        if (!display.includes('_')) setTimeout(() => alert('Tabriklaymiz! G\'olib bo\'ldingiz!'), 200);
    }
    const kb = document.getElementById('hang-keyboard');
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => {
        const btn = document.createElement('button');
        btn.className = 'hang-key';
        btn.textContent = l;
        btn.onclick = () => {
            btn.disabled = true;
            if (chosen.includes(l)) guessed.push(l); else lives--;
            renderHang();
            if (lives <= 0) setTimeout(() => alert('Yutqazdingiz! So\'z: ' + chosen), 200);
        };
        kb.appendChild(btn);
    });
    renderHang();
  