const modal = document.querySelector('#request-modal');
const actionButtons = document.querySelectorAll('[data-action="request"]');
const scrollTopButton = document.querySelector('[data-action="scroll-top"]');

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    }
  });
});

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (modal) {
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    modal.close();
  });
}
