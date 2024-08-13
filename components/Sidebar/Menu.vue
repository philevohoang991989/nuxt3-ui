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
          class="flex items-center gap-2 px-2 py-1 transition cursor-pointer"
        >
          <Icon size="20" :name="item.icon" class="text-white hover:text-primary-400" />
          <span class="text-white text-[14px] hover:text-primary-400">{{ item.title }}</span>
        </NuxtLink>
        <div v-if="item.children.length > 0">
          <UAccordion
            :items="item.children"
            :ui="{ wrapper: 'flex flex-col w-full' }"
          >
            <template #default="{ item, index, open }">
              <UButton
                color="gray"
                variant="ghost"
                class="dark:border-gray-700 px-2 py-1 dark:hover:bg-transparent"
                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
              >
                <template #settings>
                  <div
                    class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
                  >
                    <UIcon
                      :name="item.icon"
                      class="w-4 h-4 text-white dark:text-gray-900"
                    />
                  </div>
                </template>

                <span class="text-sm/6 truncate">{{ item.label }}</span>

                <template #trailing>
                  <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                  />
                </template>
              </UButton>
            </template>
            <template
              #settings
              class="space-y-1.5 border-l border-gray-200 dark:border-gray-800 ml-2.5"
            >
              <nav
                class="space-y-3 border-l border-gray-200 dark:border-gray-800 ml-2.5"
              >
                <div class="space-y-1.5">
                  <NuxtLink
                    :href="itemSub.path"
                    exact-active-class="active"
                    v-for="(itemSub, index) in item.children[0].subItem"
                    :key="index"
                    class="flex items-center gap-1.5 group border-l -ml-px pl-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
                  >
                    <!-- <Icon size="20" :name="item.icon" class="text-white" /> -->
                    <span class="text-sm/6 truncate">{{
                      itemSub.title
                    }}</span>
                  </NuxtLink>
                </div>
              </nav>
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
  border-left:1px solid #4ade80;
  // color: #4ade80;
  span{
    color: #4ade80;
    font-weight: 500;
  }
}
</style>
