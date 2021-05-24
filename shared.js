const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  closeModal();
});

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
