
    let mScore = 0, mTime = 60, mTimer = null, currentAns = 20;
    const eq = document.getElementById('m-eq');
    const inp = document.getElementById('m-ans');
    function newEq() {
        const a = Math.floor(Math.random() * 20) + 1;
        const b = Math.floor(Math.random() * 20) + 1;
        currentAns = a + b;
        eq.textContent = `${a} + ${b}`;
        inp.value = '';
    }
    inp.oninput = () => {
        if (parseInt(inp.value) === currentAns) {
            mScore += 10;
            document.getElementById('m-score').textContent = mScore;
            newEq();
        }
    };
    window.startMath = () => {
        clearInterval(mTimer);
        mScore = 0; mTime = 60;
        document.getElementById('m-score').textContent = 0;
        newEq();
        mTimer = setInterval(() => {
            mTime--;
            document.getElementById('m-time').textContent = mTime + 's';
            if (mTime <= 0) { clearInterval(mTimer); alert('Vaqt tugadi! Ballingiz: ' + mScore); }
        }, 1000);
    };
  