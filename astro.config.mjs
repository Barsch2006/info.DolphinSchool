import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://barsch2006.github.io",
  base: "/info.DolphinSchool",
  integrations: [
    starlight({
      title: "DolphinSchool Docs",
      social: {
        github: "https://github.com/filip326/DolphinSchool",
      },
      defaultLocale: "de",
      locales: {
        // German docs in `src/content/docs/`
        root: {
          label: "Deutsch",
          lang: "de", // lang is required for root locales
        },
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
