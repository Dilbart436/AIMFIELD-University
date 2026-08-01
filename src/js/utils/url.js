/**
 * URL Utilities
 * --------------------------------
 * Centralizes internal URL generation for the application.
 */

/**
 * Returns the correct application URL for both:
 * - Local development
 * - GitHub Pages deployment
 */
export function getUrl(path = "") {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const normalizedPath = path.trim().replace(/^\/+/, "");

    return normalizedPath
        ? `${base}/${normalizedPath}`
        : `${base}/`;
}