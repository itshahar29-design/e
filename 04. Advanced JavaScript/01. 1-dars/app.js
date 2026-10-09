const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.style.textDecoration = e.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        e.target.style.opacity = e.target.style.opacity === '0.5' ? '1' : '0.5';
    });
});

const btn = document.getElementById('main-btn');
btn.addEventListener('click', () => {
    alert("Tugma bosildi!");
});