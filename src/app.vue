<script>
useHead({
  title: "MCC - Discuss"
});

async function onCheck () {
  await usePushManager();
}

</script>

<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
      <button @click="onCheck">
        Check for permission
      </button>
    </NuxtLayout>
  </div>
</template>

<style>
html {
  font-family: 'Karla', Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Space Grotesk", Arial, sans-serif;
}
</style>
