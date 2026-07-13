// Styles
import "../scss/main.scss";

// Components
import { initNavigation } from "./components/navigation.js";
import { initHeroSlider } from "./components/hero-slider.js";
import { initPlacementSlider } from "./components/placement-slider.js";
import { initMegaMenu } from "./components/mega-menu.js";
import { initAuthModal } from "./components/auth-modal.js";

function initApp() {
    initNavigation();
    initHeroSlider();
    initPlacementSlider();
    initMegaMenu();
    initAuthModal();

    console.log("AIMFIELD is Running...");
}

initApp();