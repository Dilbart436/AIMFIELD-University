export function initMegaMenu() {
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
            const activeMegaMenuItem = document.querySelector(".nav__item--mega-active");

            if (activeMegaMenuItem && activeMegaMenuItem !== megaMenuItem) {
                activeMegaMenuItem.classList.remove("nav__item--mega-active");

                activeMegaMenuItem
                    .querySelector(".nav__trigger")
                    .setAttribute("aria-expanded", "false");
            }

            trigger.setAttribute("aria-expanded", !isExpanded);
            megaMenuItem.classList.toggle("nav__item--mega-active");
        });

    });

    document.addEventListener("click", (event) => {
        const isClickInsideNav = event.target.closest(".nav");

        if (isClickInsideNav) {
            return;
        }

        const activeMegaMenuItem = document.querySelector(".nav__item--mega-active");

        if (!activeMegaMenuItem) {
            return;
        }

        activeMegaMenuItem.classList.remove("nav__item--mega-active");
        activeMegaMenuItem
            .querySelector(".nav__trigger")
            .setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        const activeMegaMenuItem = document.querySelector(".nav__item--mega-active");

        if (!activeMegaMenuItem) {
            return;
        }

        activeMegaMenuItem.classList.remove("nav__item--mega-active");

        activeMegaMenuItem
            .querySelector(".nav__trigger")
            .setAttribute("aria-expanded", "false");
    });
}