const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

addBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    const del = document.createElement('button');
    del.textContent = 'x';
    del.className = 'del-btn';
    del.onclick = () => li.remove();
    li.appendChild(del);
    list.appendChild(li);
    input.value = '';
};