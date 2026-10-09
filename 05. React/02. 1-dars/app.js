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

function showViteCommands() {
    clearConsole();
    logConsole("1-qadam: npm create vite@latest my-app -- --template react", "info");
    logConsole("2-qadam: cd my-app", "info");
    logConsole("3-qadam: npm install", "info");
    logConsole("4-qadam: npm run dev  ->  Server tayyor: http://localhost:5173 🚀", "warn");
}

function inspectPackageJson() {
    clearConsole();
    const pkg = {
        name: "my-react-app",
        version: "0.1.0",
        scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview"
        },
        dependencies: {
            react: "^18.3.1",
            "react-dom": "^18.3.1"
        }
    };
    logConsole(JSON.stringify(pkg, null, 2), "info");
}
