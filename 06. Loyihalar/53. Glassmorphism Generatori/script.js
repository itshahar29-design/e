
    function updateGM() {
        const b = document.getElementById('gm-blur').value;
        const op = (document.getElementById('gm-op').value / 100).toFixed(2);
        const card = document.getElementById('gm-card');
        card.style.background = `rgba(255, 255, 255, ${op})`;
        card.style.backdropFilter = `blur(${b}px)`;
        document.getElementById('gm-code').value = `background: rgba(255, 255, 255, ${op});\nbackdrop-filter: blur(${b}px);\nborder: 1px solid rgba(255, 255, 255, 0.4);`;
    }
    ['gm-blur', 'gm-op'].forEach(id => document.getElementById(id).oninput = updateGM);
    updateGM();
  