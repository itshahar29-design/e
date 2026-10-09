function addListItem(text) {
    const ul = document.getElementById('my-list');
    const li = document.createElement('li');
    li.textContent = text + ' ';
    const del = document.createElement('button');
    del.textContent = "O'chirish";
    del.onclick = () => li.remove();
    li.appendChild(del);
    ul.appendChild(li);
}

function setRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}