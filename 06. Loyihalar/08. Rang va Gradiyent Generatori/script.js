function updateGrad() {
    const c1 = document.getElementById('col1').value;
    const c2 = document.getElementById('col2').value;
    const deg = document.getElementById('degSlider').value;
    document.getElementById('degVal').textContent = deg + '°';

    const grad = `linear-gradient(${deg}deg, ${c1}, ${c2})`;
    document.getElementById('previewBox').style.background = grad;
    document.getElementById('cssCodeOutput').value = `background: ${grad};`;
}

function copyCode() {
    const val = document.getElementById('cssCodeOutput').value;
    navigator.clipboard.writeText(val).then(() => alert("CSS kodi buferga ko'chirildi!"));
}

updateGrad();