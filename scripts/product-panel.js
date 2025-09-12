// Lida com a interatividade da seção de produtos.
export function initProductPanel() {
    const panels = document.querySelectorAll('.product-panel');
    const productsWrapper = document.querySelector('.products-section-wrapper');
    const productsTitle = document.getElementById('products-title');
    const productContainer = document.getElementById('product-container');

    if (!panels.length || !productsWrapper || !productsTitle || !productContainer) return;

    const initialBgColor = 'rgba(34, 34, 34, 0.8)';
    const initialTitleColor = '#ffffff';

    // Define o estado inicial (isso previne bugs de estado ao redimensionar)
    const setInitialState = () => {
        productsWrapper.style.backgroundColor = initialBgColor;
        productsTitle.style.color = initialTitleColor;
    };
    
    setInitialState();

    // Função que ativa um painel específico
    const activatePanel = (panel) => {
        if (!panel) return;
        
        // Remove 'active' de todos para garantir que apenas um esteja ativo
        panels.forEach(p => p.classList.remove('active'));
        
        // Ativa o painel alvo
        panel.classList.add('active');
        
        // Muda a cor de fundo da seção com base na cor do painel
        const rgbColor = window.getComputedStyle(panel).backgroundColor;
        const rgbaColor = rgbColor.replace('rgb', 'rgba').replace(')', ', 0.8)');
        productsWrapper.style.backgroundColor = rgbaColor;
        productsTitle.style.color = '#1f2937'; // Melhora o contraste do título
    };

    // Função que desativa todos os painéis e reseta a seção
    const deactivateAllPanels = () => {
        panels.forEach(p => p.classList.remove('active'));
        setInitialState();
    };

    // --- Manipuladores de Eventos ---
    
    // Para desktop: ativa ao passar o mouse
    function handleMouseOver(event) {
        activatePanel(event.currentTarget);
    }

    // Para desktop: desativa ao tirar o mouse do container
    function handleMouseOut() {
        deactivateAllPanels();
    }

    // Para mobile: ativa ou desativa com o clique
    function handleClick(event) {
        const panel = event.currentTarget;
        const isAlreadyActive = panel.classList.contains('active');
        
        if (isAlreadyActive) {
            deactivateAllPanels();
        } else {
            activatePanel(panel);
        }
    }

    // --- Lógica Principal ---

    // Função que remove todos os listeners para evitar duplicatas ao redimensionar
    const removeAllListeners = () => {
        panels.forEach(panel => {
            panel.removeEventListener('mouseover', handleMouseOver);
            panel.removeEventListener('click', handleClick);
        });
        productContainer.removeEventListener('mouseleave', handleMouseOut);
    };

    // Função que adiciona os listeners corretos com base no tamanho da tela
    const setupEventListeners = () => {
        removeAllListeners(); // Limpa listeners antigos

        if (window.innerWidth > 1024) { // Lógica para Desktop
            panels.forEach(panel => {
                panel.addEventListener('mouseover', handleMouseOver);
            });
            productContainer.addEventListener('mouseleave', handleMouseOut);
        } else { // Lógica para Tablet e Mobile
            panels.forEach(panel => {
                panel.addEventListener('click', handleClick);
            });
        }
    };

    // Configuração inicial e ao redimensionar a tela
    setupEventListeners();
    window.addEventListener('resize', setupEventListeners);
}