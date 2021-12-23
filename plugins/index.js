const commonPluginContentDocs = {
	editCurrentVersion: true,
	showLastUpdateAuthor: true,
	showLastUpdateTime: true,
}

const docDirs = [
	{
		key: 'fe',
		sidebarKey: 'docs',
		options: {},
		// https://docusaurus.io/docs/api/themes/configuration#navbar
		// navbar: {
		// 	to: '/fe/intro',
		// 	docId: 'intro',
		// 	// position: 'left',
		// 	label: '前端',
		// 	activeBaseRegex: '/fe/',
		// },
		// https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown
		navbar: {
            type: 'dropdown',
            label: 'Alls',
            position: 'right',
            items: [
				{
					to: '/fe/intro',
					docId: 'intro',
					label: '前端',
					activeBaseRegex: '/fe/',
				}
			],
		},
	},
	{
		key: 'code',
		sidebarKey: 'docs',
		options: {
			exclude: [
				"code/**/*.tsx"
			]
		},
		navbar: {
			to: '/code/intro',
			docId: 'intro',
			// position: 'left',
			label: 'CodeBlock',
			activeBaseRegex: '/code/',
		}
	},
];

const docDirKeys = docDirs.map(({ key }) => key);

const pluginContentDocsConfigList = docDirs.map(({ key, options, sidebarKey }) => {
	/** @type {import('@docusaurus/plugin-content-docs').Options} */
	return {
		id: key,
		path: key,
		routeBasePath: key,
		// editUrl: ({ locale, versionDocsDirPath, docPath }) => {
		// 	return `https://github.com/rain120/docusaurus-doc-template`;
		// },
		sidebarPath: require.resolve(`../sidebars/${sidebarKey}.js`),
		...commonPluginContentDocs,
		...options,
	}
});

const plugins = pluginContentDocsConfigList.map(pluginOptions => ([
	'@docusaurus/plugin-content-docs',
	pluginOptions,
])).filter(Boolean).concat([
	[
		require.resolve('@easyops-cn/docusaurus-search-local'), {
			language: ['en', 'zh'],
			hashed: true,
			docsRouteBasePath: docDirKeys,
			// docsDir: docDirKeys,
		},
	],
	[
		require.resolve('@docusaurus/plugin-pwa'), {
			debug: true,
		}
	],
	// https://docusaurus.io/zh-CN/docs/api/themes/@docusaurus/theme-live-codeblock
	'@docusaurus/theme-live-codeblock'
]);

module.exports = {
	docDirs,
	plugins
}