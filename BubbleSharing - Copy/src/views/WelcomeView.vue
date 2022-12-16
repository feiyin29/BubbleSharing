<template>
    <Suspense>
      <welcome></welcome>
      <template #fallback> Loading... </template>
    </Suspense>
  </template>
  
  <script>
  import Welcome from '../components/Welcome.vue'
  export default {
    components: {
      Welcome,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>