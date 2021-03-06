import '../styles/styles.scss';
import '../styles/media.scss';

const scrollToTopBtn = document.querySelector('.btn-top');
const burgerButton = document.querySelector('.ncv-header-burger');
const backdrop = document.querySelector('.backdrop');
const header = document.querySelector('.ncv-header');
const navBarLinks = document.querySelectorAll('.navbar__link');
const credentialLink = document.querySelector('.education__content-credential');
const modal = document.querySelector('.modal');

// Button to top
const showBtn = () => {
  if (window.innerWidth < 600 && window.pageYOffset > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

const makeActiveLink = (event) => {
  const { target } = event;
  const activeLink = document.querySelectorAll('._active');

  if (target !== activeLink[0]) {
    activeLink[0].classList.remove('_active');
    target.classList.add('_active');
  }
};

const burgerToggler = () => {
  document.body.classList.toggle('_overflow');
  backdrop.classList.toggle('_active-backdrop');
  header.classList.toggle('_active-header');
  backdrop.style.zIndex = 10;
};

const modalToggler = () => {
  document.body.classList.toggle('_overflow');
  backdrop.classList.toggle('_active-backdrop');
  modal.classList.toggle('_active-modal');
};

function loadModalContent() {
  import(/* webpackChunkName: "modal" */ './modal').then((data) => {
    const loadedData = data.default;
    insertModalContainer(loadedData());
    setListener();
  });
}

const setListener = () => {
  const modalCloseBtn = document.querySelector('.modal-container__close-btn');
  modalCloseBtn.addEventListener('click', handleModalCloseBtn);
};

const removeModalContainer = () => {
  modal.innerHTML = '';
};

const insertModalContainer = (data) => {
  modal.append(data);
};

const removeModal = () => {
  const modalCloseBtn = document.querySelector('.modal-container__close-btn');
  modalCloseBtn.removeEventListener('click', handleModalCloseBtn);

  modalToggler();
  setTimeout(() => {
    removeModalContainer();
  }, 400);
};

const handleModalCloseBtn = () => {
  removeModal();
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(window.pageXOffset, 0);
});

document.addEventListener('scroll', () => {
  requestAnimationFrame(showBtn);
});

burgerButton.addEventListener('click', () => {
  burgerToggler();
});

backdrop.addEventListener('click', () => {
  if (modal.children.length > 0) {
    removeModal();
  } else {
    burgerToggler();
  }
});

navBarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (window.innerWidth < 600) {
      burgerToggler();
    }
    makeActiveLink(event);
  });
});

credentialLink.addEventListener('click', loadModalContent);
credentialLink.addEventListener('click', () => {
  modalToggler();
  backdrop.style.zIndex = 50;
});
