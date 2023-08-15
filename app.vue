<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - E - Penghargaan` : 'E - Penghargaan';
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
