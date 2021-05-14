var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

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

backdrop.addEventListener('click', closeModal);

modalNoButton.addEventListener('click', closeModal);
