<script setup lang="ts">
const appStore = useAppStore()
const { increment, decrement } = appStore

const env = new Map()
env.set('HELLO', import.meta.env.VITE_APP_HELLO)
</script>

<template>
	<main class="relative w-full min-h-svh">
		<RouterView />

		<div class="i-mi:vue aspect-ratio-square h-12 w-12" />

		<div class="space-x-2">
			<span>
				{{ $t('hello') }}
			</span>
			<span>
				{{ env.get('HELLO') }}
			</span>
		</div>

		<div>
			{{ useBeautifulPhoneNumber('+19998887766') }}
		</div>

		<div class="mt-4 flex items-center justify-center gap-4">
			<button
				class="btn"
				@click="decrement"
			>
				-
			</button>
			<span>
				{{ appStore.count }}
			</span>
			<button
				class="btn"
				@click="increment"
			>
				+
			</button>
		</div>
	</main>
</template>
