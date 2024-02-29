<template>
	<div class="flex flex-col space-y-2">
		<label>{{ label }}</label>
		<input
			class="border border-gray-200 rounded-md px-3 py-1 outline-none"
			:type="type"
			:placeholder="placeholder"
			:value="value"
			@input="updateValue(($event.target as HTMLInputElement).value)"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	label: { type: String, required: true },
	type: { type: String, default: "text" },
	placeholder: { type: String, default: "" },
	value: { type: String, required: true },
});

const emit = defineEmits(["update:value"]);

function updateValue(newValue: string) {
	emit("update:value", newValue);
}
</script>
