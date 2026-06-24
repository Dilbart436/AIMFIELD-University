// ====== Mega Menu Initialization ======
export function initMegaMenu() {
    // Departments, Campus, Admissions and News
    const megaMenuItems = document.querySelectorAll(".nav__item--mega");

    if (!megaMenuItems.length) {
        return;
    }

    megaMenuItems.forEach((megaMenuItem) => {
        const trigger = megaMenuItem.querySelector(".nav__trigger");
        const megaMenu = megaMenuItem.querySelector(".mega-menu");

        if (!trigger || !megaMenu) {
            return;
        }

        trigger.addEventListener("click", () => {
            const isExpanded = megaMenuItem.classList.contains("nav__item--mega-active");

            if (isExpanded) {
                closeMegaMenu(megaMenuItem);
                return;
            }

            openMegaMenu(megaMenuItem);

        });
    });

    document.addEventListener("click", (event) => {
        const isClickInsideNav = event.target.closest(".nav");

        if (isClickInsideNav) {
            return;
        }

        closeActiveMegaMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        closeActiveMegaMenu();
    });
}


// ====== Helper Functions ======
function openMegaMenu(megaMenuItem) {
    if (!megaMenuItem) {
        return;
    }

    // Ensure only one mega menu is open at a time
    closeActiveMegaMenu();

    megaMenuItem.classList.add("nav__item--mega-active");

    const trigger = megaMenuItem.querySelector(".nav__trigger");

    if (!trigger) {
        return;
    }

    trigger.setAttribute("aria-expanded", "true");
}


function closeMegaMenu(megaMenuItem) {
    if (!megaMenuItem) {
        return;
    }

    megaMenuItem.classList.remove("nav__item--mega-active");

    const trigger = megaMenuItem.querySelector(".nav__trigger");

    if (!trigger) {
        return;
    }

    trigger.setAttribute("aria-expanded", "false");
}


// Find and close the currently active mega menu
function closeActiveMegaMenu() {
    const activeMegaMenuItem = document.querySelector(".nav__item--mega-active");

    if (!activeMegaMenuItem) {
        return;
    }

    closeMegaMenu(activeMegaMenuItem);
}