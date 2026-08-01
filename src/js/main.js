// Styles
import "../css/main.css";

// Layout
import { renderHeader } from "./components/layout/header.js";
import { renderFooter } from "./components/layout/footer.js";
// Layout Components
import { initNavigation } from "./components/navigation.js";
import { initMegaMenu } from "./components/mega-menu.js";
// Components
import { initHeroSlider } from "./components/hero-slider.js";
import { initPlacementSlider } from "./components/placement-slider.js";
import { initAuthModal } from "./components/auth-modal.js";
// Theme
import { initTheme } from "./components/theme.js";


function initApp() {
    // Layout
    renderHeader();
    renderFooter();
    // Layout Components
    initNavigation();
    initMegaMenu();
    // Components
    initHeroSlider();
    initPlacementSlider();
    initAuthModal();
    // Theme
    initTheme();

    console.log("AIMFIELD University application initialized.");
}

initApp();