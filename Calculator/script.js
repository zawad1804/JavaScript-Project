const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/^[0-9+\-*/.Cc]$/.test(key)) {
        event.preventDefault();
        if (key.toLowerCase() === 'c') {
            clearDisplay();
        } else if (key === '=') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    }
});
