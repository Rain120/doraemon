const commonPluginContentDocs = {
	editCurrentVersion: true,
	showLastUpdateAuthor: true,
	showLastUpdateTime: true,
}

const docDirs = [
	{
		key: 'demo',
		sidebarKey: 'docs',
		options: {},
		navbar: {
            type: 'dropdown',
            label: 'Demo',
            position: 'right',
            items: [
				{
					to: '/demo/intro',
					docId: 'intro',
					label: 'Code',
					activeBaseRegex: '/demo/',
				},
				{
					to: '/tools/intro',
					docId: 'intro',
					label: '小工具',
					activeBaseRegex: '/tools/',
				}
			],
		},
	},
	{
		key: 'tools',
		sidebarKey: 'docs',
		options: {},
		// https://docusaurus.io/docs/api/themes/configuration#navbar
		navbar: {
			to: '/tools/intro',
			docId: 'intro',
			position: 'right',
			label: '小工具',
			activeBaseRegex: '/tools/',
		},
	}
];

const docDirKeys = docDirs.map(({ key }) => key);

const pluginContentDocsConfigList = docDirs.map(({ key, options, sidebarKey }) => {
	/** @type {import('@docusaurus/plugin-content-docs').Options} */
	return {
		id: key,
		path: key,
		routeBasePath: key,
		// editUrl: ({ locale, versionDocsDirPath, docPath }) => {
		// 	return `https://github.com/rain120/doraemon`;
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