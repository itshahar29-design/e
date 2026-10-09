
    window.resizeImg = () => {
        const w = document.getElementById('img-w').value;
        const h = document.getElementById('img-h').value;
        const img = document.getElementById('rs-img');
        img.style.width = w + 'px';
        img.style.height = h + 'px';
    };
  