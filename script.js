const sliderTrack = document.querySelector('.slider-track');
const slideWidth = document.querySelector('.slide').offsetWidth;
let translateX = 0;
let animationId;

function moveSlider() {
  translateX -= 1; // Сдвигаем на 1 пиксель за кадр
  sliderTrack.style.transform = `translateX(${translateX}px)`;

  // Удаляем последний слайд, если он вышел за пределы
  if (translateX < -slideWidth * (sliderTrack.children.length - 1)) {
    sliderTrack.removeChild(sliderTrack.lastElementChild);
  }

  animationId = requestAnimationFrame(moveSlider);
}

function addSlide() {
  // Создаем новый слайд
  const newSlide = document.createElement('div');
  newSlide.classList.add('slide');
  // Задайте background-image для newSlide здесь, например,
  // newSlide.style.backgroundImage = "url('https://picsum.photos/id/1015/1920/1080')";

  // Добавляем слайд в начало sliderTrack
  sliderTrack.insertBefore(newSlide, sliderTrack.firstChild);
}

// Запускаем анимацию
moveSlider();

// Добавление слайдов по кругу
setInterval(addSlide, 10000); // Добавляем новый слайд каждые 10 секунд
