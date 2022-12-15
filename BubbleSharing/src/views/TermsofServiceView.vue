<template>
  <v-app>
    <v-main class="tw-bg-[#5B78FF]">
      <myNav></myNav>
      <termService />
      <myfooter/>
    </v-main>
  </v-app>
    
</template>
  
<script>
import { defineComponent } from 'vue';
  
  // Components
import termService from '@/components/TermsofService.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';
export default defineComponent({
  name: 'termView', 
  components: {
    termService,
    myNav,
    myfooter,
  },
});
</script>
  