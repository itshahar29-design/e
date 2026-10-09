
    const pCtx = new (window.AudioContext || window.webkitAudioContext)();
    window.playNote = (f) => {
        const o = pCtx.createOscillator(); const g = pCtx.createGain();
        o.frequency.value = f;
        g.gain.setValueAtTime(0.5, pCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, pCtx.currentTime + 0.8);
        o.connect(g); g.connect(pCtx.destination);
        o.start(); o.stop(pCtx.currentTime + 0.8);
    };
  