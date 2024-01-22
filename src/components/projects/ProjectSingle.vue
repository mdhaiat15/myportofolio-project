<script setup>
const props = defineProps(['project']);

</script>

<template>
	<a :href="project.url" target="_blank"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dar font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dar">{{ project.category
			}}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped></style>
