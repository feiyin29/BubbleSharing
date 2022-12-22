<template>
  <Suspense>
    <create></create>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import create from "../components/create.vue";
export default {
  components: {
    create,
  },
};
</script>

<style lang="scss" scoped></style>
