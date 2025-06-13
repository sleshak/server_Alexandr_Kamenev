const { time } = require("console");
const { eventNames } = require("process");

function addToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression); // вычисляем выражение
        if (isNaN(result) || !isFinite(result)) {
            clearDisplay();
            alert("Ошибка вычисления!");
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        clearDisplay();
        alert("Ошибка вычисления!");
    }
}