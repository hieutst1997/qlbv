<template>
	<div>this is Manage Money</div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
	name: "ManageMoney",
	setup() {
		const store = useStore();

		return {
			store,
		};
	},
});
</script>

<style scoped></style>
