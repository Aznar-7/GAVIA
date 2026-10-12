import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Páginas internas que no van al sitemap.
const internal = ["/og", "/logos", "/404"];

export default defineConfig({
  site: "https://www.gaviasoftware.com",
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !internal.some((p) => page.includes(p)) })],
});
