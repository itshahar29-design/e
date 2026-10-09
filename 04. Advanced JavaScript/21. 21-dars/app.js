fetch('https://fakestoreapi.com/products?limit=8')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('products');
        container.innerHTML = '';
        data.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${p.image}"><h4>${p.title.slice(0, 25)}...</h4><p>$${p.price}</p>`;
            container.appendChild(card);
        });
    });