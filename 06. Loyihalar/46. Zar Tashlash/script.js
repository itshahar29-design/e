
    const dFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    window.rollDice = () => {
        const d = document.getElementById('dice-val');
        d.textContent = dFaces[Math.floor(Math.random() * 6)];
    };
  