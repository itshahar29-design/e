
    window.generateQR = () => {
        const val = document.getElementById('qr-input').value.trim();
        if (!val) return alert('Iltimos, matn yoki havola kiriting!');
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(val)}`;
        const img = document.getElementById('qr-img');
        img.src = url;
        document.getElementById('qr-download').href = url;
        document.getElementById('qr-result').style.display = 'block';
    };
  