// Lida com a interatividade do painel de acessibilidade.
export function initAccessibility() {
    const accessibilityButton = document.querySelector('.accessibility-button');
    const accessibilityPanel = document.querySelector('.accessibility-panel');
    const closeButton = document.querySelector('.accessibility-panel .close-button');

    if (!accessibilityButton || !accessibilityPanel || !closeButton) return;

    // Alterna a visibilidade do painel de acessibilidade
    accessibilityButton.addEventListener('click', (e) => {
        e.stopPropagation();
        accessibilityPanel.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        accessibilityPanel.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!accessibilityPanel.contains(e.target) && accessibilityPanel.classList.contains('active')) {
            accessibilityPanel.classList.remove('active');
        }
    });

    const body = document.body;

    // --- Controles de Tamanho da Fonte ---
    const fontSizeIncrease = document.getElementById('font-size-increase');
    const fontSizeDecrease = document.getElementById('font-size-decrease');
    
    fontSizeIncrease.addEventListener('click', () => changeFontSize(1));
    fontSizeDecrease.addEventListener('click', () => changeFontSize(-1));

    function changeFontSize(step) {
        const elements = document.querySelectorAll('h1, h2, h3, p, a, span, li, button:not(.accessibility-panel button), label, input, textarea');
        elements.forEach(el => {
            const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
            el.style.fontSize = `${currentSize + step}px`;
        });
    }

    // --- Controle de Contraste ---
    const contrastToggle = document.getElementById('contrast-toggle');
    contrastToggle.addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });

    // --- Controle de Fonte ---
    const fontDefault = document.getElementById('font-default');
    const fontArial = document.getElementById('font-arial');
    const fontSerif = document.getElementById('font-serif');

    function setFont(fontClass) {
        body.classList.remove('font-arial', 'font-serif');
        if (fontClass) {
            body.classList.add(fontClass);
        }
    }

    fontDefault.addEventListener('click', () => setFont(null));
    fontArial.addEventListener('click', () => setFont('font-arial'));
    fontSerif.addEventListener('click', () => setFont('font-serif'));
}