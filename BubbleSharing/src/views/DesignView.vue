<template>
    <Suspense>
      <v-app>
        <v-main class="tw-bg-[#f8f8f8]">
          <myNav></myNav>
          <design></design>
        </v-main>
      </v-app>
      <template #fallback> Loading... </template>
    </Suspense>
</template>
  
  <script>
  import Design from '@/components/Design.vue'
  import myNav from '@/components/navBarMypage.vue';

  export default {
    components: {
      Design,
      myNav,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>