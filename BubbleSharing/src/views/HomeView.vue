<template>
  <v-app>
    <v-main class="tw-bg-[#00c97b]">
      <myNav></myNav>
      <Home />
      <myfooter/>
    </v-main>
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '@/components/Home.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';

export default defineComponent({
  name: 'HomeView', 
  components: {
    Home,
    myNav,
    myfooter,
  },
});
</script>
