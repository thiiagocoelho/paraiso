document.addEventListener('DOMContentLoaded', function() {
    const logosContainer = document.querySelector('.clients-logos');
    // Verifica se o container existe para evitar erros
    if(logosContainer) {
        const logos = logosContainer.querySelectorAll('img');

        // Duplica os logos para criar o efeito de loop infinito
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            logosContainer.appendChild(clone);
        });
    }
});
