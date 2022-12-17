<template>
  <v-app>
    <v-main class="tw-bg-[#F8F8F8]">
      
      <Home />
      
    </v-main>
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '@/components/analysis.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';

export default defineComponent({
  name: 'HomeView', 
  components: {
    Home,
  },
});
</script>
