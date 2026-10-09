// 17. Advanced Todo Script
let myTodos = JSON.parse(localStorage.getItem('advTodosList')) || [
    { id: 1, text: "HTML & CSS ni mustahkamlash", completed: true },
    { id: 2, text: "JavaScript amaliyotlarini bajarish", completed: false }
];
let currentFilter = 'all';

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
    if (box) box.innerHTML = '<div class="console-line info">// Konsol tozalandi.</div>';
}

function saveTodos() {
    localStorage.setItem('advTodosList', JSON.stringify(myTodos));
}

function renderAdvTodos() {
    const ul = document.getElementById('advTodoList');
    if (!ul) return;
    ul.innerHTML = "";

    let filtered = myTodos;
    if (currentFilter === 'active') filtered = myTodos.filter(t => !t.completed);
    if (currentFilter === 'completed') filtered = myTodos.filter(t => t.completed);

    if (filtered.length === 0) {
        ul.innerHTML = "<li style='color: #94a3b8; text-align: center; padding: 10px;'>Vazifalar topilmadi</li>";
        return;
    }

    filtered.forEach(item => {
        const li = document.createElement('li');
        li.style.background = "#0f172a";
        li.style.border = "1px solid #334155";
        li.style.padding = "10px 14px";
        li.style.borderRadius = "8px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";

        const text = document.createElement('span');
        text.textContent = item.text;
        text.style.cursor = "pointer";
        if (item.completed) {
            text.style.textDecoration = "line-through";
            text.style.color = "#64748b";
        }

        text.onclick = () => {
            item.completed = !item.completed;
            saveTodos();
            renderAdvTodos();
            logConsole("Holat o'zgardi: " + item.text, "info");
        };

        const del = document.createElement('button');
        del.innerHTML = "&times;";
        del.className = "btn btn-danger";
        del.style.padding = "2px 8px";
        del.onclick = () => {
            myTodos = myTodos.filter(t => t.id !== item.id);
            saveTodos();
            renderAdvTodos();
            logConsole("Vazifa o'chirildi: " + item.text, "warn");
        };

        li.appendChild(text);
        li.appendChild(del);
        ul.appendChild(li);
    });
}

function addAdvTodo() {
    const input = document.getElementById('advTodoInput');
    const val = input.value.trim();
    if (!val) return;

    myTodos.push({ id: Date.now(), text: val, completed: false });
    input.value = "";
    saveTodos();
    renderAdvTodos();
    logConsole("Yangi vazifa qo'shildi va LocalStorage ga saqlandi: " + val, "info");
}

function setFilter(f) {
    currentFilter = f;
    renderAdvTodos();
    logConsole("Filtr o'rnatildi: " + f, "warn");
}

document.addEventListener('DOMContentLoaded', () => {
    renderAdvTodos();
});
