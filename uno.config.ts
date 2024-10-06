import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
} from 'unocss'

export default defineConfig({
	shortcuts: [
		['btn', 'rounded bg-blue-700 px-4 py-1 text-white'],
	],
	rules: [
		['scrolling-touch', { '-webkit-overflow-scrolling': 'touch' }],
	],
	presets: [
		presetUno(),
		presetIcons({
			warn: true,
			collections: {
				mi: FileSystemIconLoader('./src/assets/icons'),
			},
		}),
		presetWebFonts({
			provider: 'none',
			fonts: {
				mono: 'JetBrains-Mono',
			},
		}),
	],
})
