
        let display = document.getElementById('display');
        let currentInput = '0';

        //  clear the display
        function clearDisplay() {
            currentInput = '0';
            display.textContent = currentInput;
        }

        //  append values to the display
        function appendToDisplay(value) {
            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }

        //  calculate the result
        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch (e) {
                display.textContent = 'Error';
                currentInput = '0';
            }
        }