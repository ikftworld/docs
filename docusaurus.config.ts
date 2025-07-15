import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Welcome to the IKFT FinTech Platform',
  tagline: 'Cloud-native, agentic banking infrastructure built for the future',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ikft.world',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ikftworld', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ikftworld/docs',
        },
        blog: false,
        // googleTagManager: {
        //   containerId: '',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/ikft.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'IKFT World',
        src: 'img/ikft.png',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "ledger",
          position: "left",
          label: "Ledger"
        },
        {
          type: "docSidebar",
          sidebarId: "payments",
          position: "left",
          label: "Payments",
        },
        {
          type: "docSidebar",
          sidebarId: "integrations",
          position: "left",
          label: "Integrations",
        },
        {
          href: 'https://ikft.world',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/ikftworld/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // features: [
    //   {
    //     title: 'LEDGER',
    //     link: '/ledger',
    //     img: '/img/undraw_docusaurus_mountain.svg',
    //     description: `
    //         Programmable ledger for financial transactions.
    //         Tracks money movements and account balances across your entire financial operation,
    //     `
    //   },
    //   {
    //     title: 'PAYMENTS',
    //     link: '/payments',
    //     img: '/img/undraw_docusaurus_mountain.svg',
    //     description: `
    //       <>
    //         Payments module for any type of transaction no matter which currency is used.
    //       </>
    //     `,
    //   },
    //   {
    //     title: 'INTEGRATIONS',
    //     link: '/integrations',
    //     img: '/img/undraw_docusaurus_mountain.svg',
    //     description: `
    //       <>
    //         IKFT integrates with the most popular payment messengers and Apps.
    //       </>
    //     `,
    //   },
    // ],
    footer: {
      style: 'light',
      logo: {
        alt: 'IKFT',
        src: 'img/ikft.png',
        href: 'https://ikft.world',
        width: 100
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Ledger',
              to: 'ledger',
            },
            {
              label: 'Payments',
              to: 'payments',
            },
            {
              label: 'Integrations',
              to: 'integrations',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/ikftworld',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ikftworld',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ikftworld',
            },
            {
              label: 'Cloud Status',
              href: 'https://status.ikft.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}-2025 IKFT, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
