//mobile-menu

const mobileMenuBtn = document.querySelector('.nav__mobile');
const menuItems = document.querySelector('.navigation');
const windowInnerWidth = window.innerWidth;

window.onload = () => {
  if (windowInnerWidth < 813) {
    menuItems.classList.add('non-displayed');
    document.addEventListener('click', (e) => {
      if (e.target === mobileMenuBtn) {
        menuItems.classList.toggle('non-displayed');
      } else if (e.target !== menuItems) {
        menuItems.classList.add('non-displayed');
      }
    });
  }
};

//neverending review slider

const btnNext = document.querySelector('.feedback-btn__next');
const btnPrev = document.querySelector('.feedback-btn__prev');
const feeedbackContent = document.querySelectorAll('.feedback-item');
let activeSlideNumber = 0;

function showFeedback() {
  feeedbackContent[activeSlideNumber].classList.remove('non-displayed');
}

showFeedback(activeSlideNumber);

btnNext.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber = (activeSlideNumber + 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});

btnPrev.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber =
    (activeSlideNumber + feeedbackContent.length - 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});
