<template>
    <Suspense>
      <my-bubble-sharing></my-bubble-sharing>
      <template #fallback> Loading... </template>
    </Suspense>
  </template>
  
  <script>
  import MyBubbleSharing from '@/components/MyBubbleSharing.vue'
  export default {
    components: {
      MyBubbleSharing,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>