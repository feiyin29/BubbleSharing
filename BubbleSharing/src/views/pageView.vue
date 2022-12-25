<template>
    <v-app>
      <v-main class="tw-bg-[#f8f8f8]">
        <myNav></myNav>
        <mypage />
      </v-main>
    </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import mypage from "@/components/page.vue";
import myNav from "@/components/navBarMypage.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    mypage,
    myNav,
  },
});
</script>
