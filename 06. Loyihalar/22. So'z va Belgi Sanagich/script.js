
    const ta = document.getElementById('counter-text');
    ta.oninput = () => {
        const text = ta.value;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        document.getElementById('stat-words').textContent = words;
        document.getElementById('stat-chars').textContent = text.length;
        document.getElementById('stat-no-space').textContent = text.replace(/\s/g, '').length;
        document.getElementById('stat-time').textContent = Math.ceil(words / 200) + ' daq';
    };
  