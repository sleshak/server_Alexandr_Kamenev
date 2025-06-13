function addToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
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
