document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    let currentInput = '';
    let memory = 0;

    const updateDisplay = (value) => {
        display.value = value;
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                updateDisplay('');
            } else if (value === '⌫') {
                currentInput = currentInput.slice(0, -1);
                updateDisplay(currentInput || '0');
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    updateDisplay(currentInput);
                } catch {
                    updateDisplay('Error');
                    currentInput = '';
                }
            } else if (value === 'MC') {
                memory = 0;
            } else if (value === 'MR') {
                updateDisplay(memory.toString());
            } else if (value === 'M+') {
                memory += parseFloat(currentInput) || 0;
            } else if (value === 'M-') {
                memory -= parseFloat(currentInput) || 0;
            } else if (value === '1/x') {
                currentInput = (1 / parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            } else if (value === 'x^2') {
                currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
                updateDisplay(currentInput);
            } else if (value === '√x') {
                currentInput = (Math.sqrt(parseFloat(currentInput))).toString();
                updateDisplay(currentInput);
            } else if (value === '+/-') {
                currentInput = (parseFloat(currentInput) * -1).toString();
                updateDisplay(currentInput);
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });
});
