
    let uScore = 0, cScore = 0;
    const choices = ['✊', '✂️', '📄'];
    window.playRPS = (userChoice) => {
        const compChoice = choices[Math.floor(Math.random() * 3)];
        let res = '';
        if (userChoice === compChoice) res = "Durang natija!";
        else if (
            (userChoice === '✊' && compChoice === '✂️') ||
            (userChoice === '✂️' && compChoice === '📄') ||
            (userChoice === '📄' && compChoice === '✊')
        ) {
            uScore++;
            res = "🎉 Siz g'olib bo'ldingiz!";
        } else {
            cScore++;
            res = "❌ Kompyuter g'olib!";
        }
        document.getElementById('rps-user').textContent = uScore;
        document.getElementById('rps-comp').textContent = cScore;
        document.getElementById('rps-res').innerHTML = `
            <h3 style="font-size:20px; margin-bottom:10px;">${res}</h3>
            <p>Siz: <strong>${userChoice}</strong> | Kompyuter: <strong>${compChoice}</strong></p>
        `;
    };
  