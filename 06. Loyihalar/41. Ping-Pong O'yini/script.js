
    const cv = document.getElementById('pong-cv');
    const ctx = cv.getContext('2d');
    let pY = 120, bX = 200, bY = 150, dx = 3, dy = 2;
    cv.onmousemove = (e) => { const rect = cv.getBoundingClientRect(); pY = e.clientY - rect.top - 30; };
    setInterval(() => {
        bX += dx; bY += dy;
        if (bY < 10 || bY > 290) dy = -dy;
        if (bX > 440) dx = -dx;
        if (bX < 20 && bY > pY && bY < pY + 60) dx = -dx;
        if (bX < 0) { bX = 200; bY = 150; }
        ctx.fillStyle = '#090d16'; ctx.fillRect(0, 0, 450, 300);
        ctx.fillStyle = '#38bdf8'; ctx.fillRect(10, pY, 10, 60);
        ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(bX, bY, 8, 0, Math.PI*2); ctx.fill();
    }, 20);
  