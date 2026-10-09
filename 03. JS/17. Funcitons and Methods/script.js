// 17. Functions and Methods Script
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

function jarayon(amalNomi, son, callback) {
    logConsole("Boshlandi: " + amalNomi);
    let hisob = son * 10;
    callback(hisob);
}

function testCallbackDemo() {
    clearConsole();
    jarayon("O'n barobar oshirish", 7, function(natija) {
        logConsole("Callback yetib keldi! Natija: " + natija, "info");
    });
}

function testMethodVsFunction() {
    clearConsole();
    function oddiyFunksiya() {
        return "Men mustaqil FUNKSIYAman!";
    }

    const dasturchi = {
        ism: "Temur",
        metod: function() {
            return "Men obyekt ichidagi METODman! (ismim: " + this.ism + ")";
        }
    };

    logConsole(oddiyFunksiya());
    logConsole(dasturchi.metod(), "warn");
}
