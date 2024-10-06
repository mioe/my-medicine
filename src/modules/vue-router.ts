import { createRouter, createWebHistory } from 'vue-router/auto'
import ErrorPage from '~/ErrorPage.vue'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes,
		{ path: '/:pathMatch(.*)*', name: 'error-page', component: ErrorPage },
	],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export {
	router,
}
