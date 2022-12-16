<template>
  <v-app>
    <v-main class="tw-bg-[#5B78FF]">
      <myNav></myNav>
      <report />
      <myfooter/>
    </v-main>
  </v-app>    
</template>
    
<script>
import { defineComponent } from 'vue';
    
// Components
import report from '@/components/reportViolation.vue';
import myNav from '@/components/navBar.vue';
import myfooter from '@/components/footer.vue';
export default defineComponent({
  name: 'termView', 
  components: {
    report,
    myNav,
    myfooter,
  },
});
</script>
    