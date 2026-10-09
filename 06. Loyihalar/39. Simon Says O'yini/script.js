
    let seq = [], userIdx = 0, lvl = 1;
    window.startSimon = () => { seq = []; lvl = 1; nextRound(); };
    function nextRound() {
        document.getElementById('simon-lvl').textContent = lvl;
        userIdx = 0;
        seq.push(Math.floor(Math.random() * 4));
        playSeq();
    }
    function playSeq() {
        seq.forEach((val, i) => {
            setTimeout(() => {
                const el = document.getElementById('s-' + val);
                el.classList.add('lit');
                setTimeout(() => el.classList.remove('lit'), 300);
            }, (i + 1) * 600);
        });
    }
    window.pressSimon = (val) => {
        if (val === seq[userIdx]) {
            userIdx++;
            if (userIdx === seq.length) { lvl++; setTimeout(nextRound, 1000); }
        } else {
            alert('Noto\'g\'ri! Siz ' + lvl + '-darajagacha yetib keldingiz.');
        }
    };
  