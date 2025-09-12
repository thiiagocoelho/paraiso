import { initMobileNav } from './mobile-nav.js';
import { initProductPanel } from './product-panel.js';
import { initScrollReveal } from './scroll-reveal.js';

// Inicializa todos os módulos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProductPanel();
  initScrollReveal();
});
