import type { ZudokuConfig } from "zudoku";
import GoogleAnalyticsPlugin from "./plugins/googleAnalytics";
import FaviconPlugin from "./plugins/favicon";
import apis from "./apis/apis";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/ikft.png", dark: "/ikft.png" },
      alt: "IKFT",
      width: "40px",
    },
    footer: {
      columns: [
        {
          title: "Product",
          position: "center",
          links: [
            { label: "Features", href: "/intro" },
            { label: "Pricing", href: "/pricing" },
            { label: "GitHub", href: "https://github.com/ikftworld" }, // Auto-detected as external
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "https://ikft.world" },
            { label: "Investors", href: "https://ikft.world/#/investors" },
          ],
        },
      ],
    },
  },
  navigation: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "link",
          label: "Introduction",
          to: "/intro",
          icon: "circle-play"
        },
        {
          type: "link",
          label: "API Catalog",
          to: "/api-catalog",
          icon: "book"
        },
      ],
    },
    {
      type: "link",
      label: "Tenant API",
      icon: "link",
      to: "/docs/tenant"
    },
    {
      type: "link",
      label: "Customer APIs",
      icon: "link",
      to: "/docs/customer"
    }
  ],
  redirects: [{ from: "/", to: "/intro" }],
  catalogs: {
    path: "/api-catalog",
    label: "API Catalog",
    // items: ["api-operational"],
  },
  apis: apis as ZudokuConfig["apis"],
  defaults: {
    apis: {
      examplesLanguage: "shell", // Default language for code examples
      disablePlayground: true, // Disable the interactive API playground
      showVersionSelect: "if-available", // Control version selector visibility
      expandAllTags: false, // Control initial expanded state of tag categories
    },
  },
  plugins: [...GoogleAnalyticsPlugin, FaviconPlugin],
};

export default config;
