document.addEventListener("DOMContentLoaded", function() {
  // Меняем цвет фона при клике на кнопку
  document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });

  // Сбрасываем цвет фона при клике
  document.getElementById('resetColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = "white";
  });

  // Отображаем нажатие клавиш
  document.addEventListener('keydown', function(event) {
    document.getElementById("keyPressDisplay").textContent = `Key Pressed: ${event.key}`;
  });

  // Отображаем текст из input в реальном времени
  document.getElementById('textInput').addEventListener('input', function() {
    document.getElementById("textInputDisplay").textContent = this.value;
  });

  // Функция для случайного цвета
  function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
  }
});