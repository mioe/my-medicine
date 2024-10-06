import { createI18n } from 'vue-i18n'
import type { Locale } from 'vue-i18n'

const DEFAULT_LOCALE = 'ru'
const I18N_KEY = 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const i18n = createI18n({
	legacy: false,
	locale: '',
	messages: {},
})

const localesMap = Object.fromEntries(
	Object.entries(import.meta.glob('../../locales/*.yml'))
		.map(([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>

const availableLocales = Object.keys(localesMap)
const loadedLanguages: string[] = []

function getDefaultLocale() {
	const browserLang = localStorage.getItem(I18N_KEY) || navigator.language
	const availableLocale = availableLocales.find(l => l.includes(browserLang))
	return availableLocale || DEFAULT_LOCALE
}

function setI18nLanguage(lang: Locale) {
	i18n.global.locale.value = lang as any
	if (typeof document !== 'undefined')
		document.querySelector('html')?.setAttribute('lang', lang)
	return lang
}

async function loadLanguageAsync(lang: string): Promise<Locale> {
	// If the same language
	if (i18n.global.locale.value === lang)
		return setI18nLanguage(lang)

	// If the language was already loaded
	if (loadedLanguages.includes(lang))
		return setI18nLanguage(lang)

	// If the language hasn't been loaded yet
	const messages = await localesMap[lang]()
	i18n.global.setLocaleMessage(lang, messages.default)
	loadedLanguages.push(lang)
	localStorage.setItem(I18N_KEY, lang)
	return setI18nLanguage(lang)
}

export {
	i18n,
	getDefaultLocale,
	availableLocales,
	loadLanguageAsync,
}
