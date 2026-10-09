// 15. Shallow vs Deep Copy Script
function logConsole(msg, type = 'info') {
    const box = document.getElementById('consoleOutput');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'console-line ' + type;
    div.textContent = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function clearConsole() {
    const box = document.getElementById('consoleOutput');
    if (box) box.innerHTML = '<div class="console-line info">// Konsol tozalandi.</div>';
}

function testReferenceBug() {
    clearConsole();
    let user1 = { ism: "Alisher", yosh: 25 };
    let user2 = user1; // Yangi nusxa emas, bitta manzil!

    user2.ism = "Javohir";

    logConsole("user2.ism 'Javohir' ga o'zgartirildi.");
    logConsole("user1.ism nima bo'ldi? -> " + user1.ism + " (XATO! user1 ham o'zgarib ketdi)", "error");
}

function testShallowCopy() {
    clearConsole();
    let user1 = { ism: "Alisher", manzil: { shahar: "Toshkent" } };
    let user2 = { ...user1 }; // Shallow copy

    user2.ism = "Bekzod"; // Mustaqil ishlaydi
    user2.manzil.shahar = "Samarqand"; // Ichki obyekt esa umumiy manzilga ulangan!

    logConsole("user2.ism: " + user2.ism + " | user1.ism: " + user1.ism + " (Birinchi qatlam yaxshi)");
    logConsole("user1.manzil.shahar: " + user1.manzil.shahar + " (Ichki qatlam buzildi!)", "warn");
}

function testDeepCopy() {
    clearConsole();
    let user1 = { ism: "Alisher", manzil: { shahar: "Toshkent" } };
    let user2 = structuredClone(user1); // Deep Copy!

    user2.manzil.shahar = "Buxoro";

    logConsole("user1.manzil.shahar: " + user1.manzil.shahar);
    logConsole("user2.manzil.shahar: " + user2.manzil.shahar, "info");
    logConsole("structuredClone orqali ikkala obyekt 100% mustaqil nusxa bo'ldi! 🎉", "info");
}
