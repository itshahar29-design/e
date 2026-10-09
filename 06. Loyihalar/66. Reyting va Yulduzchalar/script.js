
    window.rate = (n) => {
        const s = document.querySelectorAll('.star');
        s.forEach((el, i) => el.classList.toggle('lit', i < n));
        document.getElementById('rate-text').textContent = n + ' yulduz bilan baholandi!';
    };
  