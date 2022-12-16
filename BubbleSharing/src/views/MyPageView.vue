<template>
    <Suspense>
      <my-page></my-page>
      <template #fallback> Loading... </template>
    </Suspense>
  </template>
  
  <script>
  import MyPage from '@/components/Mypage.vue'
  export default {
    components: {
      MyPage,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>