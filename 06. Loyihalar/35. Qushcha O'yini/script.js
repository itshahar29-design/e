
    const cv = document.getElementById('flap-canvas');
    const c = cv.getContext('2d');
    let bY = 150, bV = 0, pipes = [], fScore = 0, fLoop = null;

    function jump() { bV = -5.5; }
    cv.onclick = jump;
    window.addEventListener('keydown', (e) => { if (e.code === 'Space') jump(); });

    window.startFlap = () => {
        clearInterval(fLoop);
        bY = 150; bV = 0; pipes = []; fScore = 0;
        document.getElementById('flap-score').textContent = 0;
        fLoop = setInterval(run, 25);
    };

    function run() {
        bV += 0.3; bY += bV;
        if (Math.random() < 0.02) pipes.push({ x: 340, top: Math.random() * 180 + 40 });
        c.fillStyle = '#7dd3fc';
        c.fillRect(0, 0, 340, 420);
        c.fillStyle = '#fbbf24';
        c.beginPath(); c.arc(50, bY, 14, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#15803d';
        for (let i = 0; i < pipes.length; i++) {
            const p = pipes[i]; p.x -= 2.5;
            c.fillRect(p.x, 0, 40, p.top);
            c.fillRect(p.x, p.top + 110, 40, 420);
            if (p.x < 70 && p.x > 20 && (bY - 14 < p.top || bY + 14 > p.top + 110)) {
                clearInterval(fLoop);
                alert('Yiqildingiz! Ball: ' + fScore);
                return;
            }
            if (p.x === 48) { fScore++; document.getElementById('flap-score').textContent = fScore; }
        }
        pipes = pipes.filter(p => p.x > -50);
        if (bY > 410 || bY < 0) { clearInterval(fLoop); alert('Yiqildingiz! Ball: ' + fScore); }
    }
  