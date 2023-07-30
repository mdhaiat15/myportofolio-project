<script>
export default {
	name: 'About',
};
</script>
<script setup>
import AboutMe from '@/components/about/AboutMe.vue';
import feather from 'feather-icons';
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
	feather.replace();
})

onUpdated(() => {
	feather.replace();
})

</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>
	</div>
</template>

<style scoped></style>
