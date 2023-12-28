<template>
	<div>
        <span>this is home </span>
        <button @click="router.push({name: 'manageUser'})">switch</button>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
export default defineComponent({
	name: "Dashboard",
	setup() {
		const store = useStore();
        const router = useRouter();

		return {
			store,
            router
		};
	},
});
</script>

<style scoped></style>
