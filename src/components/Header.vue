<template>
	<header
		class="fixed w-screen top-0 h-16 flex space-x-6 items-center bg-purple-900 text-white p-4"
	>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/sign-in">Sign In</RouterLink>
		<RouterLink to="/sign-up">Sign Up</RouterLink>
		<button @click="signOut"></button>
	</header>
</template>

<script setup lang="ts">
const signOut = () => {
	console.log("Sign out clicked!");
};
</script>
