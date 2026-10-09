
    window.flipCoin = () => {
        const coin = document.getElementById('coin');
        coin.style.transform = 'rotateY(720deg)';
        setTimeout(() => {
            coin.style.transform = 'none';
            coin.textContent = Math.random() < 0.5 ? 'BURGUT' : 'PANJA';
        }, 600);
    };
  