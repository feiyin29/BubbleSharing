<template>
    <Suspense>
      <design></design>
      <template #fallback> Loading... </template>
    </Suspense>
  </template>
  
  <script>
  import Design from '@/components/Design.vue'
  export default {
    components: {
      Design,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>