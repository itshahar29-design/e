// 05. Images Script
const sampleImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
    "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=500"
];

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

function changeImage(idx) {
    const img = document.getElementById('mainGalleryImg');
    img.src = sampleImages[idx];
    logConsole("Rasm almashtirildi: " + sampleImages[idx], "info");
}

function testBrokenImage() {
    const img = document.getElementById('mainGalleryImg');
    img.onerror = () => {
        logConsole("onerror hodisasi: Rasm yuklanmadi, xatolik yuz berdi!", "error");
    };
    img.src = "https://notfound.example.com/invalid-image.jpg";
}
