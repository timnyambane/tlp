<script setup lang="ts">
import { ref } from "vue";

const showSideMenu = ref(false);

const toggleSideMenu = () => {
  showSideMenu.value = !showSideMenu.value;
};

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <div
    class="flex dark:bg-slate-900 items-center justify-between py-3 px-4 shadow lg:px-56 lg:py-4 lg:mx-auto"
  >
    <div class="flex items-center flex-1">
      <img src="~assets/images/lp-logo.png" alt="Logo" class="w-64" />
    </div>

    <!-- Mobile Menu icon -->
    <UIcon
      @click="toggleSideMenu"
      name="i-heroicons-bars-3-bottom-right-20-solid"
      color="mariner"
      class="lg:hidden ml-4"
    />

    <!-- Navigation for larger screens -->
    <div class="hidden lg:flex gap-4 items-center justify-center flex-1">
      <NuxtLink class="hover:text-primary font-medium" to="/"
        >Register as User</NuxtLink
      >
      <NuxtLink class="hover:text-primary font-medium" to="/"
        >Register Business</NuxtLink
      >
    </div>
    <!-- Make this div hidden on small screens -->
    <div class="flex-1 justify-end lg:flex hidden">
      <NuxtLink
        to="/"
        class="border px-4 py-1 rounded border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold"
        >Log In
      </NuxtLink>

      <ClientOnly>
        <UButton
          class="mx-2 px-2 hover:bg-mariner-400"
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
    </div>

    <!-- Navigation for mobile screen -->
    <transition name="slide">
      <div
        v-if="showSideMenu"
        class="lg:hidden fixed top-0 left-0 h-full w-8/12 p-4 bg-white flex flex-col shadow-lg"
      >
        <div class="flex justify-end mb-4">
          <UIcon
            @click="toggleSideMenu"
            name="i-heroicons-x-mark-16-solid"
            color="mariner"
            class="lg:hidden ml-4 flex"
          />
        </div>
        <NuxtLink class="m-2 text-primary" to="/">Register as User</NuxtLink>
        <NuxtLink class="m-2 text-primary" to="/">Register Business</NuxtLink>
        <hr />
        <NuxtLink
          to="/"
          class="border mt-5 px-4 py-1 w-fit rounded border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold"
          >Log In
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
