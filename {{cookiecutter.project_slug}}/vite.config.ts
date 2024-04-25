import path from "path";
import {svelte} from "@sveltejs/vite-plugin-svelte";

export default {
    plugins: [
        svelte()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
};
