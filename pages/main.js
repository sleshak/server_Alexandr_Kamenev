document.addEventListener('DOMContentLoaded', function() {
const header = document.getElementById('header')
if (!header) {
    console.error('Элемент с id="header" не найден! Проверьте HTML');
} else {
    console.log('Элемент header найден:', header);
}
const el1 = document.createElement('h1');
el1.textContent = 'Каменев А.П. (Группа 231)';

header.appendChild(el1);
});