<template>
  <div>
    <h1>Test</h1>
    <UButton
      :loading="loading"
      label="Button"
      size="sm"
      loading-icon="line-md:loading-loop"
    />
    <p>Count: {{ counter.count }}</p>
    <UButton @click="counter.increment" label="Increment" />
  </div>
</template>

<script setup>

const counter = useCounterStore()

let loading = ref(true);
</script>

<style lang="scss" scoped></style>
