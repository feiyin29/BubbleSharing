<template>
  <v-app>
    <v-main class="tw-bg-[#5B78FF]">
      <myNav></myNav>
      <Home />
      <myfooter/>
    </v-main>
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '@/components/Discover.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';

export default defineComponent({
  name: 'Discover', 
  components: {
    Home,
    myNav,
    myfooter,
  },
});
</script>
