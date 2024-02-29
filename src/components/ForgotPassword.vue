<template>
	<form @submit.prevent="submit" class="flex justify-center w-full mt-20">
		<div class="flex flex-col space-y-4 w-1/2">
			<h1 class="text-center text-xl font-semibold">Forgot Password</h1>
			<div class="flex flex-col space-y-2">
				<TextInput
					:value="formData.email"
					label="Email"
					type="email"
					@update:value="formData.email = $event"
				/>
			</div>
			<div class="self-end">
				<span>or </span>
				<RouterLink to="/sign-in" class="text-sm text-blue-600"
					>Sign In</RouterLink
				>
			</div>
			<button
				type="submit"
				class="bg-blue-700 rounded-md px-3 py-2 border-blue-800 text-white"
			>
				Submit
			</button>
			<div>
				<span>Don't have an account? </span>
				<RouterLink to="/sign-up" class="self-end text-sm text-blue-600"
					>Sign Up</RouterLink
				>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextInput from "./ui/TextInput.vue";
import { RouterLink } from "vue-router";

const formData = ref({
	email: "",
});

const submit = () => {
	console.log("Forgot password...");
	console.log(formData.value.email);
};
</script>
