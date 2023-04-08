module.exports = {
	extends: ['next', 'turbo', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
}
