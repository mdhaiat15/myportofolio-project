<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section class="">
		<div class="flex flex-col justify-center mt-12 sm:mt-10">
			<!-- Banner left contents -->
			<div class="w-full">
				<h1
					class="font-general-semibold text-3xl md:text-6xl text-center text-ternary-dark dark:text-primary-light uppercase">
					Hi, Iam Haiat
				</h1>
				<p class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center leading-none text-gray-400">
					Website Developer
				</p>
				<div class="flex justify-center sm:block">
					<!-- <a
					download="Stoman-Resume.pdf"
					href="/files/Stoman-Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Download CV</span
					></a
				> -->
				</div>
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
		<div class="grid grid-cols-6 justify-items-center place-items-center px-20 md:grid-cols-12 md:px-10">
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
