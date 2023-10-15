import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://barsch2006.github.io",
  base: "/info.DolphinSchool",
  integrations: [
    starlight({
      title: "DolphinSchool",
      social: {
        github: "https://github.com/filip326/DolphinSchool",
      },
      defaultLocale: 'root', // optional
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
      customCss: [
				'./src/styles/custom.css',
			],
      description: "DolphinSchool. Die Lösung für die digitale Schule von morgen.",
      logo: {
        dark: "./src/assets/DolphinSchool_light.png",
        light: "./src/assets/DolphinSchool_dark.png",
        src: "./src/assets/DolphinSchool_light.png",
        alt: "DolphinSchool",
      },
      lastUpdated: "15.10.2023",
      sidebar: [
        {
          label: "Docs",
          items: [
            { label: "Get started", link: "/docs/" },
            { label: "Login", link: "/docs/login" },
          ],
        },
      ],
    }),
  ],
});
