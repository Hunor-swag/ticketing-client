import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "@/views/auth/SignIn.vue";
import SignUp from "@/views/auth/SignUp.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/sign-in",
			name: "sign-in",
			component: SignIn,
		},
		{
			path: "/sign-up",
			name: "sign-up",
			component: SignUp,
		},
		{
			path: "/forgot-password",
			name: "forgot-password",
			component: ForgotPassword,
		},
	],
});

export default router;
