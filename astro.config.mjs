// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: process.env.NODE_ENV === "production" ? "https://cards.petef.io" : "http://localhost:4321",
});
