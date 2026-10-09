
    const ans = ['Albatta!', 'Shubhasiz', 'Keyinroq so\'ra', 'Umid qilma', 'Katta ehtimol bilan', 'Yo\'q'];
    window.shake8 = () => {
        const el = document.getElementById('ball-res');
        el.textContent = '...';
        setTimeout(() => el.textContent = ans[Math.floor(Math.random() * ans.length)], 400);
    };
  