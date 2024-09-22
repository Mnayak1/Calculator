let display = document.getElementById('display');
let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue.charAt(displayValue.length - 1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = displayValue || '0';
}