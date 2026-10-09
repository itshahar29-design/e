// Native JS yordamchi skripti
function logConsole(msg, type = 'info') {
    const box = document.getElementById('consoleOutput');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'console-line ' + type;
    div.textContent = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function clearConsole() {
    const box = document.getElementById('consoleOutput');
    if (box) box.innerHTML = '<div class="console-line">// Konsol tozalandi.</div>';
}

function demoImperativeVsDeclarative() {
    clearConsole();
    logConsole("1. [Imperativ - Oddiy JS]:", "warn");
    logConsole("   const btn = document.createElement('button');");
    logConsole("   btn.innerText = 'Bosildi';");
    logConsole("   btn.onclick = () => { count++; span.innerText = count; }");
    logConsole("2. [Deklarativ - React]:", "info");
    logConsole("   const [count, setCount] = useState(0);");
    logConsole("   return <button onClick={() => setCount(count + 1)}>{count}</button>;");
}

function demoSpaConcept() {
    clearConsole();
    logConsole("SPA afzalligi: Sahifa 0ms da yangilandi, butun sahifa oq bo'lib kutib qolmadi! 🚀", "info");
}
