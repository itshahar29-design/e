
    let timeLeft = 1500;
    let timerId = null;
    let completedSessions = 0;
    const display = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const sessionCountEl = document.getElementById('session-count');
    const modeBtns = document.querySelectorAll('.mode-btn');

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;
    }

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            clearInterval(timerId);
            timerId = null;
            timeLeft = parseInt(btn.dataset.time);
            updateDisplay();
        });
    });

    startBtn.onclick = () => {
        if (timerId) return;
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerId);
                timerId = null;
                alert('Vaqt tugadi! Ajoyib natija!');
                completedSessions++;
                sessionCountEl.textContent = completedSessions;
            }
        }, 1000);
    };

    pauseBtn.onclick = () => {
        clearInterval(timerId);
        timerId = null;
    };

    resetBtn.onclick = () => {
        clearInterval(timerId);
        timerId = null;
        const activeMode = document.querySelector('.mode-btn.active');
        timeLeft = parseInt(activeMode.dataset.time);
        updateDisplay();
    };
    updateDisplay();
  