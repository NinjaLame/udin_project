import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		url: "/udin_project/client"
	}
});

export default app;