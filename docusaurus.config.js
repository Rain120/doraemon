// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { plugins } = require('./config/plugins');
const presets = require('./config/presets');
const navbar = require('./config/navbar');

const baseUrl = process.env.BASE_URL || '/';
console.log('baseUrl', baseUrl)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doraemon',
  tagline: 'lalala, doraemon ð',
  url: 'https://rain120.github.io/doraemon/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Rain120', // Usually your GitHub org/user name.
  projectName: 'doraemon', // Usually your repo name.

  presets,
  plugins,

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // gtag: {
      //   trackingID: '',
      //   anonymizeIP: true, // æ¯å¦å¿åå IPï¼
      // },
      navbar: {
        title: 'Doraemon',
        logo: {
          alt: 'Doraemon',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          ...navbar,
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rain120/doraemon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'å¶ä»ä»åº',
            items: [
              {
                label: 'Study Notes',
                href: 'https://github.com/Rain120/study-notes',
              },
              {
                label: 'Typescript Guide',
                href: 'https://github.com/Rain120/typescript-guide',
              },
              {
                label: 'One Utils',
                href: 'https://github.com/tinyfe/one-utils',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rain120/doraemon',
              },
            ],
          },
        ],
        copyright: `Copyright Â© ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      liveCodeBlock: {
        /**
         * å®æ¶æææ¾ç¤ºçä½ç½®ï¼å¯ä½äºç¼è¾å¨ä¸æ¹æä¸æ¹ã
         * å¯ä¸ºï¼"top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
