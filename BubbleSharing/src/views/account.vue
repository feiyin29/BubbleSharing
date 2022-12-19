<template>
  <v-app>
    <v-main>
      <myNav></myNav>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Home from "@/components/account.vue";
import myNav from "@/components/navBarMypage.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Home,
    myNav,
  },
});
</script>
