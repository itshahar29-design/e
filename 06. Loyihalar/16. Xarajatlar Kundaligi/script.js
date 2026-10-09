
    let data = JSON.parse(localStorage.getItem('my_expenses') || '[]');
    function update() {
        let inc = 0, exp = 0;
        const list = document.getElementById('expense-list');
        list.innerHTML = '';
        data.forEach((d, i) => {
            if (d.type === 'income') inc += d.amount; else exp += d.amount;
            const item = document.createElement('div');
            item.style.cssText = 'background:#0f172a; padding:12px 16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border-left:4px solid ' + (d.type === 'income' ? '#10b981' : '#ef4444');
            item.innerHTML = `<span>${d.title}</span><strong>${d.type === 'income' ? '+' : '-'}${d.amount.toLocaleString()} so'm</strong><button onclick="delExp(${i})" style="background:none;border:none;color:#ef4444;cursor:pointer;"><i class="fa-solid fa-trash"></i></button>`;
            list.appendChild(item);
        });
        document.getElementById('total-balance').textContent = (inc - exp).toLocaleString() + " so'm";
        document.getElementById('total-income').textContent = inc.toLocaleString() + " so'm";
        document.getElementById('total-expense').textContent = exp.toLocaleString() + " so'm";
        localStorage.setItem('my_expenses', JSON.stringify(data));
    }
    window.addExpense = () => {
        const title = document.getElementById('exp-title').value.trim();
        const amount = parseFloat(document.getElementById('exp-amount').value);
        const type = document.getElementById('exp-type').value;
        if (!title || !amount) return;
        data.unshift({ title, amount, type });
        document.getElementById('exp-title').value = '';
        document.getElementById('exp-amount').value = '';
        update();
    };
    window.delExp = (i) => { data.splice(i, 1); update(); };
    update();
  