
    let habits = JSON.parse(localStorage.getItem('my_habits') || '[]');
    const days = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Yak'];
    function render() {
        const list = document.getElementById('habit-list');
        list.innerHTML = '';
        habits.forEach((h, hIdx) => {
            const div = document.createElement('div');
            div.style.cssText = 'background:#0f172a; padding:15px; border-radius:10px; border:1px solid #334155;';
            let daysHtml = days.map((d, dIdx) => `
                <button onclick="toggleDay(${hIdx}, ${dIdx})" style="width:36px; height:36px; border-radius:50%; border:none; cursor:pointer; font-weight:bold; background:${h.days[dIdx] ? '#10b981' : '#334155'}; color:white;">${d}</button>
            `).join('');
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                    <strong>${h.title}</strong>
                    <button onclick="delHabit(${hIdx})" style="background:none;border:none;color:#ef4444;cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div style="display:flex; gap:10px; justify-content:space-between;">${daysHtml}</div>
            `;
            list.appendChild(div);
        });
        localStorage.setItem('my_habits', JSON.stringify(habits));
    }
    window.addHabit = () => {
        const inp = document.getElementById('habit-name');
        if (!inp.value.trim()) return;
        habits.push({ title: inp.value.trim(), days: [false,false,false,false,false,false,false] });
        inp.value = '';
        render();
    };
    window.toggleDay = (hIdx, dIdx) => { habits[hIdx].days[dIdx] = !habits[hIdx].days[dIdx]; render(); };
    window.delHabit = (i) => { habits.splice(i, 1); render(); };
    render();
  