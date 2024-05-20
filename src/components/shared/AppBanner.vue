<script setup>
import feather from 'feather-icons';
import { onMounted, onUpdated } from 'vue';
let theme = localStorage.getItem('theme') || 'light';

onMounted(() => {
	feather.replace();
	theme = localStorage.getItem('theme') || 'light';
});

onUpdated(() => {
	feather.replace();
});
</script>

<template>
	<section class="">
		<div class="flex flex-col justify-center mt-12 sm:mt-10">
			<!-- Banner left contents -->
			<div class="w-full">
				<h1
					class="font-general-semibold text-3xl md:text-6xl text-center text-ternary-dark uppercase">
					Hi, I am Haiat
				</h1>
				<p class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center leading-none text-gray-400">
					Website Developer
				</p>
			</div>

			<!-- Banner right illustration -->
			<!-- <div class="w-full md:w-2/3 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="../../assets/images/developer.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="../../assets/images/developer-dark.svg"
				alt="Developer"
			/>
		</div> -->
			<div
				class="border-2 border-black relative mx-auto rounded-full mb-10 lg:mb-20 w-80 h-80 overflow-hidden mt-14 md:h-96 md:w-96">
				<img src="../../assets/images/logo_icon.png" alt="">
			</div>
		</div>
		<div
			class="grid grid-cols-6 justify-items-center place-items-center gap-2 sm:gap-0 px-10 sm:px-20 md:grid-cols-12 md:px-10">
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full" src="https://www.vectorlogo.zone/logos/php/php-icon.svg"
					alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
					alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
					alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
					alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full" src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg"
					alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt=""></a>
			<a href="" class="w-10 lg:w-16"><img class="w-full"
					src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt=""></a>
		</div>
	</section>
</template>

<style scoped></style>
