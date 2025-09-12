// Lida com a lógica de abrir e fechar o menu de navegação em telas pequenas.
export function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-wrapper a');

    if (!navToggle || !navWrapper) return;

    navToggle.addEventListener('click', () => {
        const isActive = navWrapper.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open', isActive);
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navWrapper.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}
