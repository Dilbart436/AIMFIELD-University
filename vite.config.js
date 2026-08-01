import { defineConfig } from "vite";
import { readdirSync } from "node:fs";
import { relative, resolve } from "node:path";

function getHtmlEntries(rootDir = ".") {
    const entries = {};

    function walk(directory) {
        const items = readdirSync(directory, {
            withFileTypes: true,
        });

        for (const item of items) {
            const fullPath = resolve(directory, item.name);

            if (item.isDirectory()) {
                if (
                    item.name === "dist" ||
                    item.name === "node_modules" ||
                    item.name === ".git"
                ) {
                    continue;
                }

                walk(fullPath);
                continue;
            }

            if (item.name !== "index.html") {
                continue;
            }

            const key =
                relative(resolve(rootDir), fullPath)
                    .replace(/\\/g, "/")
                    .replace(/\/index\.html$/, "") || "index";

            entries[key] = fullPath;
        }
    }

    walk(resolve(rootDir));

    return entries;
}

export default defineConfig(({ mode }) => ({
    base: mode === "production"
        ? "/aimfield-university/"
        : "/",

    build: {
        rollupOptions: {
            input: getHtmlEntries(),
        },
    },
}));