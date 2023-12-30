import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

import { nav } from "./nav.mjs";
import { sidebar } from "./sidebar/sidebar.mjs";
import { footer } from "./footer.mjs";

export default withPwa(
  defineConfig({
    title: "웹 스타일 가이드",
    base: "/web-style-guide/",
    lang: "ko",
    themeConfig: {
      nav,
      sidebar,
      footer,
    },
    pwa: {},
  })
);
