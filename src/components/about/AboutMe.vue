<script setup>
const bios = [
	{
		id: 1,
		bio:
			'Hello! I am a web developer who is excited about new experiences in project development. Proficient in programming languages like PHP and tools like Framework Laravel, Javascript, Vue JS, Bootstrap, Tailwind CSS, and Database MySql. I am always ready to create engaging and responsive web solutions. Each project is an opportunity for me to learn more and provide exceptional web experiences.',
	},
];
</script>

<template>
	<div class="block sm:flex sm:flex-none sm:gap-10 mt-10 sm:mt-20 lg:px-10 px-6 sm:px-3">
		<!-- About profile image -->
		<div class="w-full flex justify-center sm:block sm:justify-normal sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/Haiat.jpg" class="object-center rounded-xl w-60 sm:w-full" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p class="text-indigo-600 text-2xl font-bold">Moch. Dzawil Haiat</p>
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p><br>
			<div class="grid grid-col-1 sm:grid-cols-2 sm:gap-4">
				<div class="mb-10 md:mb-0">
					<p class="text-indigo-600 text-2xl font-bold">Project Experience</p>
					<ul class="list-disc list-inside font-general-regular">
						<li>
							Website Employee Attendance
						</li>
						<li>
							Website bookings meeting rooms
						</li>
						<li>
							Module Project Management in WebApp Erp internal
							office
						</li>
						<li>
							Module Internal Communication in WebApp Erp internal
							office
						</li>
						<li>
							Website Recruitment
						</li>
						<li>
							Website Company Profile
						</li>
						<li>
							Website Reseller
						</li>
					</ul>
				</div>
				<div>
					<p class="text-indigo-600 text-2xl font-bold">Job Experience</p>
					<ul class="list-disc list-inside font-general-regular">
						<li>
							<span>Web Developer at PT Nose Herbalindo</span>
							<p class="ml-5">May 2022 - Now</p>
						</li>
						<li>
							<span>Freelance Web Developer at Hero Web Desain Surabaya</span>
							<p class="ml-5">Feb 2021 – Des 2021</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
