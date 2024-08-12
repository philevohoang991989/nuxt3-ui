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
    <UButton label="Signin" @click="signIn" />
    <Demo :parentData="counter.count" />
  </div>
</template>

<script setup>
import Demo from "./Demo.vue";
const counter = useCounterStore();
const userStore = useUserStore();
let loading = ref(true);
// definePageMeta({
//   middleware: ["already-auth"],
// });
const signIn = async () => {
  await userStore.signIn({
    username: "emilys",
    password: "emilyspass",
  });
  await navigateTo("/profile", { replace: true });
};
</script>

<style lang="scss" scoped></style>
