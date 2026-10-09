// 30. Imtihon Script
let todos = [
    { id: 1, matn: "JavaScript asoslarini to'liq takrorlash", bajarildi: true },
    { id: 2, matn: "Imtihon topshiriqlarini topshirish", bajarildi: false }
];

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

function renderTodos() {
    const ul = document.getElementById('todoList');
    if (!ul) return;
    ul.innerHTML = "";

    todos.forEach(item => {
        const li = document.createElement('li');
        li.style.background = "#1e293b";
        li.style.padding = "10px 14px";
        li.style.borderRadius = "8px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.border = "1px solid #334155";

        const textSpan = document.createElement('span');
        textSpan.textContent = item.matn;
        textSpan.style.cursor = "pointer";
        if (item.bajarildi) {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.color = "#94a3b8";
        } else {
            textSpan.style.color = "#f8fafc";
        }

        textSpan.onclick = () => {
            item.bajarildi = !item.bajarildi;
            renderTodos();
            logConsole("Vazifa holati o'zgartirildi: " + item.matn, "info");
        };

        const delBtn = document.createElement('button');
        delBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        delBtn.className = "btn btn-danger";
        delBtn.style.padding = "4px 8px";
        delBtn.style.fontSize = "0.8rem";
        delBtn.onclick = () => {
            todos = todos.filter(t => t.id !== item.id);
            renderTodos();
            logConsole("Vazifa o'chirildi: " + item.matn, "error");
        };

        li.appendChild(textSpan);
        li.appendChild(delBtn);
        ul.appendChild(li);
    });
}

function addTodoItem() {
    const input = document.getElementById('todoInput');
    const val = input.value.trim();
    if (!val) {
        logConsole("Iltimos, vazifa matnini kiriting!", "warn");
        return;
    }

    const yangiVazifa = {
        id: Date.now(),
        matn: val,
        bajarildi: false
    };

    todos.push(yangiVazifa);
    input.value = "";
    renderTodos();
    logConsole("Yangi vazifa muvaffaqiyatli qo'shildi: " + val, "info");
}

document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
});
