// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const plugins = require('./plugins');
const presets = require('./presets');
const navbar = require('./navbar');

const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Doc Template',
  tagline: 'Dinosaurs are cool',
  url: 'https://rain120.github.io/docusaurus-doc-template',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Rain120', // Usually your GitHub org/user name.
  projectName: 'docusaurus-doc-template', // Usually your repo name.

  plugins,
  presets,

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docusaurus Doc Template',
        logo: {
          alt: 'Docusaurus Doc Template',
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
            href: 'https://github.com/rain120/docusaurus-doc-template',
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
            title: '其他仓库',
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
                href: 'https://github.com/rain120/docusaurus-doc-template',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
