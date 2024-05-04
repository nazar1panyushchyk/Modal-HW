const backdrop = document.querySelector('.backdrop');
const buttonOpen = document.querySelector('.button-open');
const buttonClose = document.querySelector('.button-close');

buttonOpen.addEventListener('click', function() {
    document.body.classList.add('show-modal')
});

buttonClose.addEventListener('click', function() {
    document.body.classList.remove('show-modal')
});