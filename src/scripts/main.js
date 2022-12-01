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
