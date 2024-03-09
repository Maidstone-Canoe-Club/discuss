<script setup lang="ts">

const route = useRoute();
const id = route.params.id;

</script>

<template>
  <PageContent>
    Thread! {{ id }}
    <ReplyBox />
  </PageContent>
</template>

<style scoped>

</style>
