
    window.togglePrice = (isYear) => {
        document.getElementById('price-1').textContent = isYear ? '$96 / yil' : '$10 / oy';
        document.getElementById('price-2').textContent = isYear ? '$240 / yil' : '$25 / oy';
    };
  