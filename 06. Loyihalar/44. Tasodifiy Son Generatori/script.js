
    window.genRNG = () => {
        const min = parseInt(document.getElementById('rng-min').value) || 0;
        const max = parseInt(document.getElementById('rng-max').value) || 100;
        document.getElementById('rng-res').textContent = Math.floor(Math.random() * (max - min + 1)) + min;
    };
  