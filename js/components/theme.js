"use strict";

/**
 * Theme Component
 * --------------------------------
 * Handles...
 */

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------
const themeToggleButtons = document.querySelectorAll(".js-theme-toggle");
const themeIcons = document.querySelectorAll(".nav__theme-icon");

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const THEME = {
    LIGHT: "light",
    DARK: "dark"
};


// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------
let currentTheme = THEME.LIGHT;


// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    currentTheme = theme;

    updateThemeButton(theme);
}

function initializeTheme() {
    const savedTheme = loadSavedTheme();

    applyTheme(savedTheme || THEME.LIGHT);
}

function handleThemeToggle() {
    const newTheme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

    applyTheme(newTheme);
    saveTheme(newTheme);
}


// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------
function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

function loadSavedTheme() {
    return localStorage.getItem("theme");
}

function updateThemeButton(theme) {
    const isDarkTheme = theme === THEME.DARK;

    themeToggleButtons.forEach((button) => {
        button.setAttribute("aria-label",
            isDarkTheme ? "Switch to light mode" : "Switch to dark mode");
        button.setAttribute("aria-pressed", String(isDarkTheme));
    });

    themeIcons.forEach((icon) => {
        icon.classList.toggle("fa-circle-half-stroke", isDarkTheme);
        icon.classList.toggle("fa-moon", !isDarkTheme);
    });
}


// -----------------------------------------------------------------------------
// Event Listeners
// -----------------------------------------------------------------------------
function bindEventListeners() {
    themeToggleButtons.forEach((button) => {
        button.addEventListener("click", handleThemeToggle);
    });
}

// -----------------------------------------------------------------------------
// Initialization
// -----------------------------------------------------------------------------
export function initTheme() {
    if (themeToggleButtons.length === 0) return;

    initializeTheme();
    bindEventListeners();
}