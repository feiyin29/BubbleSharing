<template>
  <v-app>
    <v-main class="tw-bg-[#C9D7FC]">
      <myNav></myNav>
      <aboutUs />
      <myfooter/>
    </v-main>
  </v-app>    
</template>
    
<script>
import { defineComponent } from 'vue';
    
// Components
import aboutUs from '@/components/aboutUs.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footerLightBlue.vue';
export default defineComponent({
  name: 'termView', 
  components: {
    aboutUs,
    myNav,
    myfooter,
  },
});
</script>
    