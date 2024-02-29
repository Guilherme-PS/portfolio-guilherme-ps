var email = document.querySelector('.email');

email.dataset.content = 'Clique para Copiar';

email.addEventListener('click', async () => {
    await navigator.clipboard.writeText(email.innerHTML.toLowerCase());

    email.dataset.content = 'E-mail Copiado!';

    setTimeout(function() {
        email.dataset.content = 'Clique para Copiar';
    }, 3000);
});


