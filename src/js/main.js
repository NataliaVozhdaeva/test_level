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

//timer

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 1 * 30 * 60 * 1000); // for endless timer
initializeClock('timer', deadline);
