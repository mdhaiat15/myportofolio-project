<script setup>
const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	inputIdentifier: {
		type: String,
		default: '',
	},
	val: {
		type: [String, Number],
		default: '',
	},
	inputType: {
		type: String,
		default: 'text',
	},
});
</script>

<template>
	<div>
		<label class="block mb-2 text-lg text-primary-dark" :for="label">{{ label }}</label>
		<input
			class="w-full px-5 py-3 border border-gray-3 border-opacity-50 text-primary-dark bg-ternary-lightrounded-md shadow-sm text-md"
			:id="inputIdentifier" :name="inputIdentifier" :placeholder="label" :aria-label="inputIdentifier" :value="val"
			:type="inputType" v-bind="$attrs" @input="$emit('update:val', $event.target.value)" required />
	</div>
</template>

<style lang="scss" scoped></style>
