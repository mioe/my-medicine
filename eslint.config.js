import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import unocss from '@unocss/eslint-config/flat'

export default [
	// js
	js.configs.recommended,
	{
		rules: {
			'no-return-await': 'off',
			'no-undef': 'off',
			'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
		},
	},

	// ts
	...ts.configs.recommended,
	{
		rules: {
			'@typescript-eslint/array-type': ['error', { default: 'array' }],
			'@typescript-eslint/no-restricted-types': 'error',
			'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
			'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'separate-type-imports' }],
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: false, ignoreProperties: false }],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'error',
		},
	},

	// shared js+ts rules
	{
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/space-before-function-paren': ['error', 'never'],
		},
	},

	// vue
	...vue.configs['flat/recommended'],
	{
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		rules: {
			'vue/block-order': ['error', { order: [ 'script', 'template', 'style' ] }],
			'vue/component-api-style': ['error', ['script-setup']],
			'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
			'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],
			'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }],
			'vue/html-indent': ['error', 'tab', { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true, ignores: [] }],
			'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'any', component: 'always' }, svg: 'always', math: 'always' }],
			'vue/multi-word-component-names': 'off',
			'vue/next-tick-style': ['error', 'promise'],
			'vue/no-empty-component-block': 'error',
			'vue/no-required-prop-with-default': ['error', { autofix: false }],
			'vue/padding-line-between-blocks': ['error', 'always'],
			'vue/prefer-define-options': 'error',
			'vue/require-default-prop': 'off',
			'vue/require-macro-variable-name': ['error', { defineProps: 'props', defineEmits: 'emit', defineSlots: 'slots', useSlots: 'slots', useAttrs: 'attrs' }],
			'vue/require-typed-ref': 'error',
		},
	},

	// unocss
	unocss,

	{
		ignores: [
			'**/node_modules/',
			'.git/',
			'*.min.*',
			'CHANGELOG.md',
			'dist',
			'LICENSE*',
			'output',
			'coverage',
			'public',
			'temp',
			'packages-lock.json',
			'pnpm-lock.yaml',
			'yarn.lock',
			'__snapshots__',
			'!.github',
			'!.vitepress',
			'!.vscode',
			'pb_data',
			'pb_migrations',
		],
	},
]
