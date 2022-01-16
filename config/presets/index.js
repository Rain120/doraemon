const docDirs = [
	{
		key: 'docs',
		options: {}
	},
];

const presetClassicConfigList = {};

docDirs.forEach(({ key, options }) => {
	// 只能给doc
	presetClassicConfigList[key] = {
		sidebarPath: require.resolve(`../sidebars/${key}.js`),
		// Please change this to your repo.
		editUrl: 'https://github.com/Rain120/doraemon/edit/main',
	}
});

const presets = [
	[
		'@docusaurus/preset-classic',
		/** @type {import('@docusaurus/preset-classic').Options} */
		({
			...presetClassicConfigList,
			blog: {
				showReadingTime: true,
				// Please change this to your repo.
				editUrl:
					'https://github.com/rain120/doraemon/edit/main/blog/',
			},
			theme: {
				customCss: require.resolve('../../src/css/custom.css'),
			},
		}),
	],
].filter(Boolean);

module.exports = presets;