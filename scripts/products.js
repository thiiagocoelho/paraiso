document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.product-panel');
    const container = document.getElementById('product-container');
    const productsWrapper = document.querySelector('.products-section-wrapper');
    const productsTitle = document.getElementById('products-title');

    // Define o estado inicial da secção com um fundo semi-transparente e efeito de desfoque.
    const initialBgColor = 'rgba(34, 34, 34, 0.8)';
    productsWrapper.style.backgroundColor = initialBgColor;
    productsWrapper.style.backdropFilter = 'blur(5px)'; // Adiciona o efeito de "vidro fosco"
    productsTitle.style.color = '#ffffff'; // Garante que o título seja branco e legível.

    function activatePanel(panelToActivate) {
        const rgbColor = window.getComputedStyle(panelToActivate).backgroundColor;
        
        // Converte a cor para o formato RGBA com 80% de opacidade.
        const rgbaColor = rgbColor.replace('rgb', 'rgba').replace(')', ', 0.8)');

        // Aplica a nova cor semi-transparente ao fundo da secção.
        productsWrapper.style.backgroundColor = rgbaColor;
        productsTitle.style.color = '#ffffff';

        panels.forEach(panel => {
            const collapsedContent = panel.querySelector('.collapsed-content');
            const expandedContent = panel.querySelector('.expanded-content');

            if (panel === panelToActivate) {
                // Expande o painel ativo.
                panel.style.flexGrow = '50';
                if (collapsedContent) collapsedContent.style.opacity = '0';
                if (expandedContent) {
                    expandedContent.style.visibility = 'visible';
                    expandedContent.style.opacity = '1';
                }
            } else {
                // Contrai os outros painéis.
                panel.style.flexGrow = '10'; 
                if (collapsedContent) collapsedContent.style.opacity = '0.5'; 
                if (expandedContent) {
                    expandedContent.style.visibility = 'hidden';
                    expandedContent.style.opacity = '0';
                }
            }
        });
    }

    // Reseta todos os painéis para o estado inicial (colapsado).
    function resetPanels() {
         // Restaura a cor de fundo para o cinza semi-transparente inicial.
         productsWrapper.style.backgroundColor = initialBgColor;
         productsTitle.style.color = '#ffffff';

         panels.forEach(panel => {
            const collapsedContent = panel.querySelector('.collapsed-content');
            const expandedContent = panel.querySelector('.expanded-content');
            
            panel.style.flexGrow = '1';
            if (collapsedContent) collapsedContent.style.opacity = '1';
            if (expandedContent) {
                expandedContent.style.visibility = 'hidden';
                expandedContent.style.opacity = '0';
            }
        });
    }

    // Adiciona o evento de 'mouseenter' a cada painel para ativar a expansão.
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => activatePanel(panel));
    });

    // Adiciona o evento de 'mouseleave' ao container principal para resetar os painéis.
    container.addEventListener('mouseleave', resetPanels);
});

