function updateLen() {
    document.getElementById('lenVal').textContent = document.getElementById('passLen').value;
}

function generatePass() {
    const len = parseInt(document.getElementById('passLen').value);
    const u = document.getElementById('incUpper').checked;
    const l = document.getElementById('incLower').checked;
    const n = document.getElementById('incNum').checked;
    const s = document.getElementById('incSym').checked;

    let chars = "";
    if (u) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (l) chars += "abcdefghijklmnopqrstuvwxyz";
    if (n) chars += "0123456789";
    if (s) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
        alert("Kamida bitta parametrni tanlang!");
        return;
    }

    let pass = "";
    for (let i = 0; i < len; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('passDisplay').value = pass;
}

function copyPassword() {
    const p = document.getElementById('passDisplay').value;
    navigator.clipboard.writeText(p).then(() => alert("Parol buferga ko'chirildi!"));
}

generatePass();