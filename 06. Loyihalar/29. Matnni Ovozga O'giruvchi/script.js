
    window.speakText = () => {
        const text = document.getElementById('tts-input').value;
        if (!text) return;
        const ut = new SpeechSynthesisUtterance(text);
        ut.rate = 1;
        ut.pitch = 1;
        window.speechSynthesis.speak(ut);
    };
  