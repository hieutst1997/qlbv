<template>
  <div>
    <main class="relative">
      <Loading v-if="store.getters.getLoading" />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Loading from "@/components/Loading/loadingStyleOne.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Loading,
  },
  name: "mainLayout",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
});
</script>

<style scoped>
</style>
