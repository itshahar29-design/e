
    let notes = JSON.parse(localStorage.getItem('sticky_notes') || '[]');
    const colors = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8', '#fed7aa'];

    function save() {
        localStorage.setItem('sticky_notes', JSON.stringify(notes));
        render();
    }

    function render() {
        const grid = document.getElementById('notes-grid');
        grid.innerHTML = '';
        notes.forEach((n, idx) => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.style.backgroundColor = n.color || '#fef08a';
            card.innerHTML = `
                <textarea onchange="updateNote(${idx}, this.value)">${n.text}</textarea>
                <div class="note-actions">
                    <small style="color: #64748b">${n.date}</small>
                    <button class="note-del" onclick="deleteNote(${idx})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    window.updateNote = (idx, text) => {
        notes[idx].text = text;
        localStorage.setItem('sticky_notes', JSON.stringify(notes));
    };

    window.deleteNote = (idx) => {
        notes.splice(idx, 1);
        save();
    };

    document.getElementById('new-note-btn').onclick = () => {
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        notes.unshift({ text: '', color: randColor, date: new Date().toLocaleDateString('uz-UZ') });
        save();
    };
    render();
  