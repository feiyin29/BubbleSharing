<template>
  <v-app>
    <v-main class="tw-bg-[#C9D7FC]">
      <myNav></myNav>
      <Home />
      <myfooter/>
    </v-main>
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '@/components/Management.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footerLightBlue.vue';

export default defineComponent({
  name: 'Management', 
  components: {
    Home,
    myNav,
    myfooter,
  },
});
</script>
