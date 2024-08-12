<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <h3 class="text-gray-900 font-bold">Template Nuxt</h3>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-4">
        <NuxtLink
          :href="item.path"
          v-for="(item, index) in items"
          :key="index"
          exact-active-class="active"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-primary-400"
        >
          <Icon size="20" :name="item.icon" class="text-white" />
          <span class="text-white">{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);
const items = ref([
  {
    title: "Overview",
    path: "/overview",
    icon: "humbleicons:dashboard",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "mingcute:transfer-3-line",
  },
  {
    title: "Account",
    path: "/account",
    icon: "material-symbols:account-box",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "pixelarticons:contact",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "mdi:settings-outline",
  },
]);
</script>

<style lang="scss" scoped>
.active{
    background-color: #4ade80;
    color: #fff;
}

</style>
