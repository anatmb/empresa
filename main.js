const open = document.getElementById('open');
const miModal = document.getElementById('miModal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
miModal.classList.add('show');
});

close.addEventListener('click', () => {
miModal.classList.remove('show');
});
