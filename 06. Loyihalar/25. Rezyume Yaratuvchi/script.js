
    function sync() {
        document.getElementById('prev-name').textContent = document.getElementById('cv-name').value || 'Ism Familiya';
        document.getElementById('prev-role').textContent = document.getElementById('cv-role').value || 'Kasbingiz';
        document.getElementById('prev-email').textContent = document.getElementById('cv-email').value || 'email@manzil.com';
        document.getElementById('prev-about').textContent = document.getElementById('cv-about').value || 'Ozingiz haqingizda...';
        const sk = (document.getElementById('cv-skills').value || 'HTML, CSS, JS').split(',');
        const skDiv = document.getElementById('prev-skills');
        skDiv.innerHTML = sk.map(s => `<span style="background:#e2e8f0; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:bold;">${s.trim()}</span>`).join('');
    }
    ['cv-name', 'cv-role', 'cv-email', 'cv-about', 'cv-skills'].forEach(id => {
        document.getElementById(id).oninput = sync;
    });
    sync();
  