const commonPluginContentDocs = {
	editCurrentVersion: true,
	showLastUpdateAuthor: true,
	showLastUpdateTime: true,
}

const docDirs = [
	{
		key: 'fe',
		options: {}
	},
];

const docDirKeys = docDirs.map(({ key }) => key);

const pluginContentDocsConfigList = docDirs.map(({ key, options }) => {
	/** @type {import('@docusaurus/plugin-content-docs').Options} */
	return {
		id: key,
		path: key,
		routeBasePath: key,
		// editUrl: ({ locale, versionDocsDirPath, docPath }) => {
		// 	return `https://github.com/rain120/docusaurus-doc-template`;
		// },
		sidebarPath: require.resolve(`../sidebars/${key}.js`),
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
			// language: ['en', 'zh'],
			hashed: true,
			// docsRouteBasePath: docDirKeys,
			// docsDir: docDirKeys,
		},
	],
	// [
	// 	require.resolve('@docusaurus/plugin-google-gtag'), {
	// 	}
	// ],
	[
		require.resolve('@docusaurus/plugin-pwa'), {
			debug: true,
		}
	]
]);

module.exports = plugins;