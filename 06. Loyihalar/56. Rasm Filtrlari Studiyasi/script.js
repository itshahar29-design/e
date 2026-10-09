
    function updateFl() {
        const b = document.getElementById('fl-bright').value;
        const c = document.getElementById('fl-contrast').value;
        const g = document.getElementById('fl-gray').value;
        const s = document.getElementById('fl-sepia').value;
        document.getElementById('fl-img').style.filter = `brightness(${b}%) contrast(${c}%) grayscale(${g}%) sepia(${s}%)`;
    }
    ['fl-bright', 'fl-contrast', 'fl-gray', 'fl-sepia'].forEach(id => document.getElementById(id).oninput = updateFl);
  