<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'My Portfolio Project',
			author: 'Haiat',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
			&copy; {{ copyrightDate }}.
			<a href="https://github.com/mdhaiat15/myportofolio-project" target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
				{{ projectName }}
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
