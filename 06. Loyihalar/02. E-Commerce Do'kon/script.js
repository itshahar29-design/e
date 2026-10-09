const sampleProducts = [
    { id: 1, title: "Simsiz Bluetooth Quloqchin", price: 49.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { id: 2, title: "Aqlli Smart Soat Pro", price: 89.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
    { id: 3, title: "Mexanik RGB Klaviatura", price: 65.00, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300" },
    { id: 4, title: "Ultra HD Veb-kamera 4K", price: 75.50, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300" },
    { id: 5, title: "Gaming Sichqoncha 16000 DPI", price: 35.00, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300" },
    { id: 6, title: "Portativ Tashqi Batareya 20000mAh", price: 29.99, image: "https://images.unsplash.com/photo-1609592426806-259160d5c8c5?w=300" }
];

let cart = [];

function renderProducts(list) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.title}">
                <h4>${p.title}</h4>
                <div class="price">$${p.price.toFixed(2)}</div>
                <button onclick="addToCart(${p.id})"><i class="fa-solid fa-cart-plus"></i> Qo'shish</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const prod = sampleProducts.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) {
        inCart.qty++;
    } else {
        cart.push({ ...prod, qty: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').textContent = cart.reduce((sum, c) => sum + c.qty, 0);
    const list = document.getElementById('cartItemsList');
    if (cart.length === 0) {
        list.innerHTML = "Savatchangiz bo'sh";
        document.getElementById('cartTotalSum').textContent = "$0.00";
        return;
    }
    let total = 0;
    list.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div><strong>${item.title}</strong><br><small>$${item.price} x ${item.qty}</small></div>
                <button style="background:#ef4444; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `;
    }).join('');
    document.getElementById('cartTotalSum').textContent = "$" + total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function filterProducts() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const filtered = sampleProducts.filter(p => p.title.toLowerCase().includes(q));
    renderProducts(filtered);
}

function checkoutOrder() {
    if (cart.length === 0) {
        alert("Savatchangiz bo'sh!");
        return;
    }
    alert("🎉 Buyurtmangiz qabul qilindi! Rahmat!");
    cart = [];
    updateCartUI();
    toggleCartDrawer();
}

renderProducts(sampleProducts);