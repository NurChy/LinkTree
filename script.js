const animatedHeading = document.querySelector('.animated-heading');

// Функция для запуска анимации
function runAnimation() {
  animatedHeading.style.opacity = '1';
  animatedHeading.style.transform = 'translateY(0)';
}

// Запускаем анимацию при загрузке страницы
window.onload = runAnimation;
