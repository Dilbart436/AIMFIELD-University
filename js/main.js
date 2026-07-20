// Styles
import "../scss/main.scss";

// Components
import { initNavigation } from "./components/navigation.js";
import { initHeroSlider } from "./components/hero-slider.js";
import { initPlacementSlider } from "./components/placement-slider.js";
import { initMegaMenu } from "./components/mega-menu.js";
import { initAuthModal } from "./components/auth-modal.js";
import { initTheme } from "./components/theme.js";

function initApp() {
    initNavigation();
    initHeroSlider();
    initPlacementSlider();
    initMegaMenu();
    initAuthModal();
    initTheme();

    console.log("AIMFIELD University application initialized.");
}

initApp();