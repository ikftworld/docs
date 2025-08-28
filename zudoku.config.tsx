import type { ZudokuConfig, ZudokuPlugin } from "zudoku";
import apis from "./apis/_apis.json";

const GoogleAnalyticsPlugin: ZudokuPlugin = {
    getHead: () => {
    return (
      <script>
        {`
          <!-- Google tag (gtag.js) -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GBNN44Q8NV');
        `}
      </script>
    );
  },
      }

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
        { type: "link", label: "Introduction", to: "/intro" },
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
  apis: apis as ZudokuConfig["apis"],
  defaults: {
    apis: {
      examplesLanguage: "shell", // Default language for code examples
      disablePlayground: true, // Disable the interactive API playground
      showVersionSelect: "if-available", // Control version selector visibility
      expandAllTags: false, // Control initial expanded state of tag categories
    },
  },
  plugins: [GoogleAnalyticsPlugin],
};

export default config;
