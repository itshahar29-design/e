const questions = [
    { q: "HTML qisqartmasi nimani anglatadi?", opts: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Mode", "Home Tool Markup"], ans: 0 },
    { q: "CSS da elementni gorizontal markazlashtirish uchun Flexboxda qaysi xususiyat kerak?", opts: ["align-items: center", "justify-content: center", "text-align: center", "margin-top: 0"], ans: 1 },
    { q: "JavaScriptda 8 ta Falsy qiymatga kirmaydigan qiymat qaysi?", opts: ["0", "null", "[] (bo'sh massiv)", "undefined"], ans: 2 },
    { q: "Reactda JSX qoidasiga ko'ra 'class' o'rniga nima yoziladi?", opts: ["className", "classId", "styleClass", "classAttr"], ans: 0 },
    { q: "Qaysi metod massiv elementlarini o'zgartirib yangi massiv hosil qiladi?", opts: ["forEach()", "map()", "filter()", "push()"], ans: 1 }
];

let currIdx = 0;
let score = 0;

function showQuestion() {
    const q = questions[currIdx];
    document.getElementById('questionNumber').textContent = (currIdx + 1) + " / " + questions.length + "-savol";
    document.getElementById('questionText').textContent = q.q;
    const opts = document.getElementById('optionsList');
    opts.innerHTML = "";
    q.opts.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "opt-btn";
        btn.textContent = String.fromCharCode(65 + idx) + ") " + opt;
        btn.onclick = () => selectAnswer(btn, idx === q.ans);
        opts.appendChild(btn);
    });
}

function selectAnswer(btn, isCorrect) {
    const parent = btn.parentElement;
    parent.querySelectorAll('button').forEach(b => b.disabled = true);
    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
    }
    setTimeout(() => {
        currIdx++;
        if (currIdx < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    document.getElementById('questionBody').style.display = 'none';
    document.getElementById('quizHeader').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    document.getElementById('scoreText').textContent = "Siz " + questions.length + " ta savoldan " + score + " tasiga to'g'ri javob berdingiz! (" + Math.round((score/questions.length)*100) + "%)";
}

function restartQuiz() {
    currIdx = 0;
    score = 0;
    document.getElementById('questionBody').style.display = 'block';
    document.getElementById('quizHeader').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';
    showQuestion();
}

showQuestion();