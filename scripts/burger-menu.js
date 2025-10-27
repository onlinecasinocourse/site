const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");
const burgerLinks = document.querySelectorAll('.burger-menu a');

burgerIcon.addEventListener('click', () => {
  if (!burgerMenu.classList.contains('show')) {
    burgerMenu.style.display = 'block';
    setTimeout(() => {
      burgerMenu.classList.add('show');
      burgerIcon.classList.add('active');
      document.body.classList.add('no-scroll');
    }, 10);
  } else {
    burgerMenu.classList.remove('show');
    burgerIcon.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      burgerMenu.style.display = 'none';
    }, 300); 
  }
});

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    burgerIcon.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      burgerMenu.style.display = 'none';
    }, 300);
  });
});