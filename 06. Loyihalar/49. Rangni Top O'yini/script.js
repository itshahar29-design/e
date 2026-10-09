
    let target = '';
    function initRGB() {
        const boxes = document.getElementById('rgb-boxes');
        boxes.innerHTML = '';
        const colors = Array(6).fill(0).map(() => `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
        target = colors[Math.floor(Math.random() * 6)];
        document.getElementById('rgb-target').textContent = target;
        document.getElementById('rgb-msg').textContent = '';
        colors.forEach(col => {
            const b = document.createElement('div');
            b.className = 'rgb-box';
            b.style.backgroundColor = col;
            b.onclick = () => {
                if (col === target) {
                    document.getElementById('rgb-msg').textContent = "🎉 To'g'ri topdingiz!";
                    document.getElementById('rgb-msg').style.color = '#10b981';
                    setTimeout(initRGB, 1500);
                } else {
                    document.getElementById('rgb-msg').textContent = "❌ Noto'g'ri, yana urinib ko'ring";
                    document.getElementById('rgb-msg').style.color = '#ef4444';
                    b.style.opacity = '0.2';
                }
            };
            boxes.appendChild(b);
        });
    }
    initRGB();
  