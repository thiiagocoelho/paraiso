document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.product-panel');
    const container = document.getElementById('product-container');

    // Verifica se os elementos existem antes de adicionar eventos
    if (!panels.length || !container) {
        return;
    }
    
    function activatePanel(panelToActivate) {
        panels.forEach(panel => {
            const collapsedContent = panel.querySelector('.collapsed-content');
            const expandedContent = panel.querySelector('.expanded-content');

            if (panel === panelToActivate) {
                // Expande o painel ativo
                panel.style.flexGrow = '50';
                if (collapsedContent) collapsedContent.style.opacity = '0';
                if (expandedContent) {
                    expandedContent.style.visibility = 'visible';
                    expandedContent.style.opacity = '1';
                }
            } else {
                // Contrai os outros painéis
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

    // Adiciona o evento de 'mouseenter' para cada painel para ativar a expansão
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => activatePanel(panel));
    });

    // Adiciona o evento de 'mouseleave' para o container principal para resetar os painéis
    container.addEventListener('mouseleave', resetPanels);
});
