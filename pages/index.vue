<template>
  <div>
    <h1>Test</h1>
    <UButton
      :loading="loading"
      label="Button"
      size="sm"
    />
  </div>
</template>

<script setup>
let loading = ref(true);
</script>

<style lang="scss" scoped></style>
