const toTopButton = document.querySelector('.scroll-to-top');

function checkScroll() {
  if ((document.documentElement.scrollTop > 20)
    && window.outerWidth < 600) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
}

toTopButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => { checkScroll(); };