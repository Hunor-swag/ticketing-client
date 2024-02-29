<template>
	<form @submit.prevent="signUp" class="flex justify-center w-full mt-20">
		<div class="flex flex-col space-y-4 w-1/2">
			<h1 class="text-center text-xl font-semibold">Sign Up</h1>
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
			<button
				type="submit"
				class="bg-blue-700 rounded-md px-3 py-2 border-blue-800 text-white"
			>
				Submit
			</button>
			<div>
				<span>Already have an account? </span>
				<RouterLink to="/sign-in" class="self-end text-sm text-blue-600"
					>Sign In</RouterLink
				>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextInput from "./ui/TextInput.vue";

const formData = ref({
	email: "",
	password: "",
});

const signUp = () => {
	console.log("Signing up...");
	console.log(formData.value.email, formData.value.password);
};
</script>
