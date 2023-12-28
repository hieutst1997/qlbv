<template>
	<div>this is Manage User</div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
	name: "ManageUser",
	setup() {
		const store = useStore();

		return {
			store,
		};
	},
});
</script>

<style scoped></style>
