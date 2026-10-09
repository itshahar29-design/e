const addBtn = document.getElementById('add-btn');
const container = document.getElementById('container');
let count = 0;

addBtn.addEventListener('click', () => {
    count++;
    const p = document.createElement('p');
    p.textContent = `${count}-paragraf yaratildi. (O'chirish uchun ustiga bosing)`;
    p.style.cursor = 'pointer';
    p.onclick = () => p.remove();
    container.appendChild(p);
});