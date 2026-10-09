
    const actx = new (window.AudioContext || window.webkitAudioContext)();
    window.playDrum = (freq) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.frequency.setValueAtTime(freq, actx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);
        gain.gain.setValueAtTime(1, actx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);
        osc.connect(gain); gain.connect(actx.destination);
        osc.start(); osc.stop(actx.currentTime + 0.3);
    };
  