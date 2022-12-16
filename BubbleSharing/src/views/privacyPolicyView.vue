<template>
  <v-app>
    <v-main class="tw-bg-[#5B78FF]">
      <myNav></myNav>
      <commu />
      <myfooter/>
    </v-main>
  </v-app>    
</template>
    
<script>
import { defineComponent } from 'vue';
    
// Components
import commu from '@/components/privacyPolicy.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';
export default defineComponent({
  name: 'termView', 
  components: {
    commu,
    myNav,
    myfooter,
  },
});
</script>
    