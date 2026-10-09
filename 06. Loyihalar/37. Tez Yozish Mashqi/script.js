
    let tStart = null, tInterval = null;
    const inp = document.getElementById('typing-input');
    const sample = document.getElementById('sample-text').innerText.trim();

    inp.oninput = () => {
        if (!tStart) {
            tStart = Date.now();
            tInterval = setInterval(() => {
                const s = Math.floor((Date.now() - tStart) / 1000);
                document.getElementById('type-time').textContent = s + 's';
                const words = inp.value.trim().split(/\s+/).length;
                document.getElementById('type-wpm').textContent = Math.round((words / (s || 1)) * 60);
            }, 1000);
        }
        if (inp.value.trim() === sample) {
            clearInterval(tInterval);
            alert('Ajoyib! Siz matnni to\'liq terib tugatdingiz!');
        }
    };
  