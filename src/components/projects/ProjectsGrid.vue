<script setup>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';
import { computed, onMounted, ref } from 'vue';

// Define reactive variables using ref
const projectsHeading = ref('Projects Portfolio');
const selectedCategory = ref('');
const select = ref('');
const searchProject = ref('');

// Computed property to get the filtered projects
const filteredProjects = computed(() => {
	if (selectedCategory.value) {
		return filterProjectsByCategory();
	} else if (searchProject.value) {
		return filterProjectsBySearch();
	}
	return projects;
});

// Method to filter projects by category
const filterProjectsByCategory = () => {
	return projects.filter((item) => {
		let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectedCategory.value);
	});
};

// Method to filter projects by title search
const filterProjectsBySearch = () => {
	let project = new RegExp(searchProject.value, 'i');
	return projects.filter((el) => el.title.match(project));
};

// Mount the component
onMounted(() => {
	feather.replace();
});
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 px-5 sm:pt-14 lg:px-10">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark">
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3 class="font-general-regular
					text-center text-secondary-dark
					text-md
					sm:text-xl
					font-normal
					mb-4
				">
				Search projects by title or filter by category
			</h3>
			<div class="
					flex
					justify-between
					border-b border-primary-light
					pb-3
					gap-2
				">
				<div class="flex justify-between gap-2">
					<span class="
							hidden
							sm:block
							bg-primary-light
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							">
						<i data-feather="search" class="text-ternary-dark"></i>
					</span>
					<input v-model="searchProject" class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						text-primary-dark
						" id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name" />
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" :select="select" />
			</div>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
		</div>
	</section>
</template>

<style scoped></style>
