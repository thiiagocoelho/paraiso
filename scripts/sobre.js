// Script para animação de revelação ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length === 0) return;
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 100}ms`;
            revealObserver.observe(el);
            });
        });