const btn = document.getElementById('gen-btn');
const code = document.getElementById('color-code');

btn.onclick = () => {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = hex;
    code.textContent = hex;
};