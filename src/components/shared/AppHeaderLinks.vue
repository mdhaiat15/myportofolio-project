<script setup>
const props = defineProps(['showModal', 'isOpen']);
</script>

<template>
	<!-- Header links -->
	<div :class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
		<router-link to="/projects"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark sm:mx-4 mb-2 sm:py-2 "
			aria-label="Projects">Projects</router-link>
		<router-link to="/about"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark sm:mx-4 mb-2 sm:py-2 border-t-2 border-b-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
			aria-label="About Me">About Me</router-link>
		<div class="flex justify-start sm:hidden">
			<a href="/files/CV-Moch-Dzawil-Haiat.pdf" download="Moch. Dzawil Haiat-CV.pdf"
				class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
				Resume
			</a>
		</div>
	</div>
</template>

<style scoped></style>
