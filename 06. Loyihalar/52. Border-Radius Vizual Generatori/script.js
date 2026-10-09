
    function updateBR() {
        const r1 = document.getElementById('br-1').value;
        const r2 = document.getElementById('br-2').value;
        const r3 = document.getElementById('br-3').value;
        const r4 = document.getElementById('br-4').value;
        const val = `${r1}% ${100-r1}% ${r2}% ${100-r2}% / ${r3}% ${r4}% ${100-r4}% ${100-r3}%`;
        document.getElementById('br-box').style.borderRadius = val;
        document.getElementById('br-code').value = `border-radius: ${val};`;
    }
    ['br-1', 'br-2', 'br-3', 'br-4'].forEach(id => document.getElementById(id).oninput = updateBR);
    updateBR();
  