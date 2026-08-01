"use strict";

/**
 * Authentication Modal Component
 * --------------------------------
 * Handles the authentication modal interactions, including:
 * - Opening and closing the modal
 * - Password visibility toggle
 * - Authentication mode switching
 * - Accessibility behavior
 * - Focus management
 */

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------
// Modal
let authModal;
let authTriggers;
let closeButton;
let overlay;
// Form
let authForm;
let emailInput;
let passwordInput;
let passwordToggle;
let passwordIcon;
// Actions
let forgotPasswordLink;
let modeToggle;
// Dynamic Content
let authTitle;
let authDescription;
let authSubmit;
let authSwitchText;
// Errors
let emailError;
let passwordError;


// -----------------------------------------------------------------------------
// Authentication Modes
// Centralized content for each authentication mode.
// -----------------------------------------------------------------------------
const AUTH_MODES = {
    signin: {
        title: "Welcome Back",
        description: "Sign in to continue your learning journey.",
        submitButton: "Sign In",
        switchText: "Don't have an account?",
        toggleButton: "Create an account",
        forgotPassword: true
    },

    signup: {
        title: "Create Your Account",
        description: "Join AIMFIELD University and start your learning journey.",
        submitButton: "Create Account",
        switchText: "Already have an account?",
        toggleButton: "Sign In",
        forgotPassword: false
    }
};


// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------
let activeTrigger = null;


// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
function openModal() {
    authModal.classList.add("auth-modal--open");
    document.body.classList.add("body--no-scroll");

    updateAuthMode("signin");

    emailInput.focus();
}

function closeModal() {
    if (!authModal.classList.contains("auth-modal--open")) return;

    authModal.classList.remove("auth-modal--open");
    document.body.classList.remove("body--no-scroll");

    if (activeTrigger) {
        activeTrigger.focus();
        activeTrigger = null;
    }
}

function handleKeydown(event) {
    if (event.key === "Escape") {
        closeModal();
        return;
    }

    if (event.key === "Tab") {
        trapFocus(event);
    }
}

function togglePasswordVisibility() {
    const isPasswordHidden = passwordInput.type === "password";

    if (isPasswordHidden) {
        passwordInput.type = "text";
        passwordToggle.setAttribute("aria-label", "Hide password");
        passwordToggle.setAttribute("aria-pressed", "true");
        passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordToggle.setAttribute("aria-label", "Show password");
        passwordToggle.setAttribute("aria-pressed", "false");
        passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

function updateAuthMode(mode) {
    const authMode = AUTH_MODES[mode];

    authTitle.textContent = authMode.title;
    authDescription.textContent = authMode.description;
    authSubmit.textContent = authMode.submitButton;
    authSwitchText.textContent = authMode.switchText;
    modeToggle.textContent = authMode.toggleButton;

    if (authMode.forgotPassword) {
        forgotPasswordLink.classList.remove("is-hidden");
    } else {
        forgotPasswordLink.classList.add("is-hidden");
    }

    if (mode === "signin") {
        modeToggle.dataset.mode = "signup";
    } else {
        modeToggle.dataset.mode = "signin";
    }
}

function handleModeToggle() {
    const mode = modeToggle.dataset.mode;

    updateAuthMode(mode);
}

function handleFormSubmit(event) {
    event.preventDefault();

    clearValidationErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const validation = validateForm(email, password);
    if (!validation.isValid) {
        showValidationError(validation);
        return;
    }
}

/**
 * Validates the authentication form.
 *
 * @returns {{
 *   isValid: boolean,
 *   field: string | null,
 *   message: string
 * }}
 */
function validateForm(email, password) {
    // Email Validation
    if (email === "") {
        return {
            isValid: false,
            field: "email",
            message: "Email is required."
        };
    }

    if (!email.includes("@")) {
        return {
            isValid: false,
            field: "email",
            message: "Please enter a valid email address."
        };
    }

    // Password Validation
    if (password === "") {
        return {
            isValid: false,
            field: "password",
            message: "Password is required."
        };
    }

    if (password.length < 8) {
        return {
            isValid: false,
            field: "password",
            message: "Password must be at least 8 characters."
        };
    }

    return {
        isValid: true,
        field: null,
        message: ""
    };
}


// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------
function clearValidationErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";
}

function showValidationError(validation) {
    if (validation.field === "email") {
        emailError.textContent = validation.message;
    }

    if (validation.field === "password") {
        passwordError.textContent = validation.message;
    }
}

function clearFieldError(field) {
    if (field === "email") {
        emailError.textContent = "";
    }

    if (field === "password") {
        passwordError.textContent = "";
    }
}

function trapFocus(event) {
    // Get all focusable elements inside the modal.
    const focusableElements = authModal.querySelectorAll("button, input, a[href]");

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
    }

    if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
    }
}


// -----------------------------------------------------------------------------
// Event Listeners
// -----------------------------------------------------------------------------
function bindEventListeners() {
    authTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            activeTrigger = trigger;
            openModal();
        });
    });

    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", handleKeydown);
    passwordToggle.addEventListener("click", togglePasswordVisibility);
    modeToggle.addEventListener("click", handleModeToggle);
    authForm.addEventListener("submit", handleFormSubmit);

    emailInput.addEventListener("input", () => {
        clearFieldError("email");
    });

    passwordInput.addEventListener("input", () => {
        clearFieldError("password");
    });
}


/**
 * Initializes the authentication modal component.
*/
// -----------------------------------------------------------------------------
// Initialization
// -----------------------------------------------------------------------------
export function initAuthModal() {
    // Modal
    authModal = document.querySelector(".js-auth-modal");
    authTriggers = document.querySelectorAll(".js-auth-trigger");
    closeButton = document.querySelector(".js-auth-close");
    overlay = document.querySelector(".js-auth-overlay");
    // Form
    authForm = document.querySelector(".js-auth-form");
    emailInput = document.querySelector(".js-email-input");
    passwordInput = document.querySelector(".js-password-input");
    passwordToggle = document.querySelector(".js-password-toggle");

    // Guard clause
    if (!authModal) {
        return;
    }

    passwordIcon = passwordToggle.querySelector("i");

    // Actions
    forgotPasswordLink = document.querySelector(".js-forgot-password");
    modeToggle = document.querySelector(".js-mode-toggle");
    // Dynamic Content
    authTitle = document.querySelector(".js-auth-title");
    authDescription = document.querySelector(".js-auth-description");
    authSubmit = document.querySelector(".js-auth-submit");
    authSwitchText = document.querySelector(".js-auth-switch-text");
    // Errors
    emailError = document.querySelector(".js-email-error");
    passwordError = document.querySelector(".js-password-error");

    bindEventListeners();
}