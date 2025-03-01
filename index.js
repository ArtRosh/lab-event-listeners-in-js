// Функция для изменения цвета фона
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Функция для сброса цвета фона на белый
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Функция для отображения нажатой клавиши
function displayKeyPress(event) {
  const keyPressParagraph = document.getElementById('keyPressDisplay');
  keyPressParagraph.textContent = `Вы нажали: ${event.key}`;
}

// Функция для отображения пользовательского ввода в реальном времени
function displayUserInput() {
  const userInput = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = userInput;
}

// Привязка обработчиков событий

// Изменение цвета фона при клике на кнопку
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

// Сброс цвета фона при двойном клике на кнопку
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

// Отображение нажатой клавиши в абзаце
document.addEventListener('keydown', displayKeyPress);

// Отображение ввода пользователя в реальном времени
document.getElementById('textInput').addEventListener('input', displayUserInput);