let currentExpr = "";

function updateDisplay() {
    document.getElementById('calcDisplay').textContent = currentExpr || "0";
}

function appendNum(n) {
    if (currentExpr === "0" && n !== ".") currentExpr = "";
    currentExpr += n;
    updateDisplay();
}

function appendOperator(op) {
    if (!currentExpr) return;
    const lastChar = currentExpr.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentExpr = currentExpr.slice(0, -1);
    }
    currentExpr += op;
    updateDisplay();
}

function clearCalc() {
    currentExpr = "";
    updateDisplay();
}

function deleteLast() {
    currentExpr = currentExpr.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentExpr = String(eval(currentExpr));
        updateDisplay();
    } catch {
        document.getElementById('calcDisplay').textContent = "Xato!";
        currentExpr = "";
    }
}