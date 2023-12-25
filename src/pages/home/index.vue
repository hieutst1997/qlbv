<template>
	<div>this is home</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "Home",
	setup() {
		const store = useStore();

		return {
			store,
		};
	},
});
</script>

<style scoped></style>
