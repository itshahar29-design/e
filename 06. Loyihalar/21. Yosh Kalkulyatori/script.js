
    window.calcAge = () => {
        const val = document.getElementById('birth-date').value;
        if (!val) return alert('Sanani tanlang!');
        const birth = new Date(val);
        const now = new Date();
        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();
        if (days < 0) { months--; days += 30; }
        if (months < 0) { years--; months += 12; }
        document.getElementById('age-text').textContent = `Siz: ${years} yil, ${months} oy, ${days} kun yashadingiz!`;
        document.getElementById('age-result').style.display = 'block';
    };
  