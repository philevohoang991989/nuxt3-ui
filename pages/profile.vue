<template>
   <div class="container py-5 min-h-screen">
      <div>
        <h1>Profile</h1>
        <UButton label="Sign out" @click="signOut" />
        <pre>{{ userStore.user }}</pre>
      </div>
    </div>
  >
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
const userStore = useUserStore();

const signOut = () => {
  userStore.logout();
  useRouter().go(0);
};
const layout = "default";
</script>

<style lang="scss" scoped></style>
