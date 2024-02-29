<template>
	<form @submit.prevent="signIn" class="flex justify-center w-full mt-20">
		<div class="flex flex-col space-y-4 w-1/2">
			<h1 class="text-center text-xl font-semibold">Sign In</h1>
			<div class="flex flex-col space-y-2">
				<TextInput
					:value="formData.email"
					label="Email"
					type="email"
					@update:value="formData.email = $event"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<TextInput
					label="Password"
					type="password"
					:value="formData.password"
					@update:value="formData.password = $event"
				/>
			</div>
			<RouterLink to="/forgot-password" class="self-end text-sm text-blue-600"
				>Forgot password?</RouterLink
			>
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
	password: "",
});

const signIn = () => {
	console.log("Signing in...");
	console.log(formData.value.email, formData.value.password);
};
</script>
