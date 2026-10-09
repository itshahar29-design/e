
    function updateBS() {
        const x = document.getElementById('bs-x').value;
        const y = document.getElementById('bs-y').value;
        const b = document.getElementById('bs-blur').value;
        const s = document.getElementById('bs-spread').value;
        const c = document.getElementById('bs-color').value;
        const val = `box-shadow: ${x}px ${y}px ${b}px ${s}px ${c};`;
        document.getElementById('bs-preview').style.boxShadow = `${x}px ${y}px ${b}px ${s}px ${c}`;
        document.getElementById('bs-code').value = val;
    }
    ['bs-x', 'bs-y', 'bs-blur', 'bs-spread', 'bs-color'].forEach(id => {
        document.getElementById(id).oninput = updateBS;
    });
    window.copyBS = () => {
        navigator.clipboard.writeText(document.getElementById('bs-code').value);
        alert('Nusxalandi!');
    };
    updateBS();
  