import type { ZudokuConfig } from "zudoku";
import apis from "./apis/_apis.json";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/ikft.png", dark: "/ikft.png" },
      alt: "IKFT",
      width: "40px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsible: false,
      icon: "link",
      items: [
        "docs/introduction",
        {
          type: "link",
          icon: "folder-cog",
          badge: {
            label: "New",
            color: "purple",
          },
          label: "Tenant API",
          to: "/docs/tenant",
        },
        {
          type: "link",
          icon: "folder-cog",
          badge: {
            label: "New",
            color: "purple",
          },
          label: "Ledger API",
          to: "/docs/ledger",
        },
        {
          type: "link",
          icon: "book",
          label: "IKFT Website",
          to: "https://ikft.world",
        },
      ],
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: apis as ZudokuConfig["apis"],
  defaults: {
    apis: {
      examplesLanguage: "shell", // Default language for code examples
      disablePlayground: true, // Disable the interactive API playground
      showVersionSelect: "if-available", // Control version selector visibility
      expandAllTags: false, // Control initial expanded state of tag categories
    },
  },
};

export default config;
