import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	const count = useStorage('store:app', 0)

	function increment() {
		count.value++
	}

	function decrement() {
		count.value--
	}

	return {
		count,

		increment,
		decrement,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
