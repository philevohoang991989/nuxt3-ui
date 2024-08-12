<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <h3 class="text-gray-900 font-bold">Template Nuxt</h3>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-4" v-for="(item, index) in items" :key="index">
        <!-- Render items without children -->
        <NuxtLink
          v-show="!item.children || item.children.length === 0"
          :href="item.path"
          exact-active-class="active"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-primary-400"
        >
          <Icon size="20" :name="item.icon" class="text-white" />
          <span class="text-white">{{ item.title }}</span>
        </NuxtLink>
        <div v-if="item.children.length > 0">
          <UAccordion :items="item.children" class="bg-transparent">
            <template #item="{ item }">
              <p class="italic text-gray-900 dark:text-white text-center">
                {{ item.description }}
              </p>
            </template>

            <template #settings style="padding-left: 28px;">
              <NuxtLink
                :href="itemSub.path"
                exact-active-class="active"
                v-for="(itemSub, index) in item.children[0].subItem"
                :key="index"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-primary-400 h-[32px]"
              >
                <!-- <Icon size="20" :name="item.icon" class="text-white" /> -->
                <span class="text-white">{{ itemSub.title }}</span>
              </NuxtLink>
            </template>
          </UAccordion>
        </div>
        <!-- Render items with children using UAccordion -->
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/overview",
    icon: "humbleicons:dashboard",
    children: [],
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "mingcute:transfer-3-line",
    children: [],
  },
  {
    title: "Account",
    path: "/account",
    icon: "material-symbols:account-box",
    children: [],
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "pixelarticons:contact",
    children: [],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "mdi:settings-outline",
    children: [
      {
        label: "Settings",
        icon: "mdi:settings-outline",
        defaultOpen: true,
        slot: "settings",
        subItem: [
          {
            title: "My account",
            path: "/my-account",
          },
          {
            title: "Change password",
            path: "/change-password",
          },
        ],
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.active {
  background-color: #4ade80;
  color: #fff;
}
</style>
