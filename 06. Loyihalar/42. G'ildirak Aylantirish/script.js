
    let deg = 0;
    window.spinWheel = () => {
        deg += Math.floor(Math.random() * 1000 + 1500);
        document.getElementById('wheel').style.transform = 'rotate(' + deg + 'deg)';
        setTimeout(() => document.getElementById('wheel-res').textContent = '🎉 Sovg\'a aniqlandi!', 3000);
    };
  