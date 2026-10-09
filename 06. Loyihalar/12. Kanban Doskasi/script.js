
    let tasks = JSON.parse(localStorage.getItem('kanban_tasks') || '[]');

    function save() {
        localStorage.setItem('kanban_tasks', JSON.stringify(tasks));
        render();
    }

    function render() {
        ['todo', 'progress', 'done'].forEach(status => {
            const list = document.querySelector(`#col-${status} .task-list`);
            list.innerHTML = '';
            tasks.filter(t => t.status === status).forEach(t => {
                const card = document.createElement('div');
                card.className = 'task-card';
                card.draggable = true;
                card.ondragstart = (e) => e.dataTransfer.setData('text/plain', t.id);
                card.innerHTML = `<span>${t.text}</span><button class="del-btn" onclick="deleteTask('${t.id}')"><i class="fa-solid fa-trash"></i></button>`;
                list.appendChild(card);
            });
        });
    }

    window.allowDrop = (e) => e.preventDefault();
    window.drop = (e, newStatus) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const t = tasks.find(x => x.id === id);
        if (t) {
            t.status = newStatus;
            save();
        }
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(x => x.id !== id);
        save();
    };

    document.getElementById('add-task-btn').onclick = () => {
        const inp = document.getElementById('task-input');
        if (!inp.value.trim()) return;
        tasks.push({ id: Date.now().toString(), text: inp.value.trim(), status: 'todo' });
        inp.value = '';
        save();
    };
    render();
  