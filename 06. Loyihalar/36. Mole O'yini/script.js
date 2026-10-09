
    let mScore = 0, mTime = 30, mTimer = null, mMole = -1;
    const holes = document.querySelectorAll('.mole-hole');
    window.startMole = () => {
        clearInterval(mTimer);
        mScore = 0; mTime = 30;
        document.getElementById('mole-score').textContent = 0;
        document.getElementById('mole-time').textContent = '30s';
        mTimer = setInterval(() => {
            mTime--;
            document.getElementById('mole-time').textContent = mTime + 's';
            holes.forEach(h => { h.classList.remove('active'); h.textContent = ''; });
            mMole = Math.floor(Math.random() * 6);
            holes[mMole].classList.add('active');
            holes[mMole].textContent = '🐹';
            if (mTime <= 0) {
                clearInterval(mTimer);
                alert('Vaqt tugadi! To\'plangan ball: ' + mScore);
            }
        }, 800);
    };
    window.hitMole = (i) => {
        if (i === mMole) {
            mScore += 10;
            document.getElementById('mole-score').textContent = mScore;
            holes[i].classList.remove('active');
            holes[i].textContent = '💥';
            mMole = -1;
        }
    };
  