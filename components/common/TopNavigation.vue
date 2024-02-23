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
    <NuxtLink class="flex items-center flex-1" to="/">
      <img src="~assets/images/lp-logo.png" alt="Logo" class="w-64" />
    </NuxtLink>

    <!-- Mobile Menu icon -->
    <UIcon
      name="i-heroicons-bars-3-bottom-right-20-solid"
      color="mariner"
      class="lg:hidden ml-4"
      @click="toggleSideMenu"
    />

    <!-- Navigation for larger screens -->
    <div class="hidden lg:flex gap-4 items-center justify-center flex-1">
      <NuxtLink
        class="hover:text-primary font-medium"
        to="/register/customer"
        exact-active-class="text-primary"
      >
        Register as Customer
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary font-medium"
        to="/register/business"
        exact-active-class="text-primary"
      >
        Register Business
      </NuxtLink>
    </div>
    <div class="flex-1 justify-end lg:flex hidden">
      <UButton
        variant="soft"
        icon="i-heroicons-phone-20-solid"
        label="Contact Us"
        class="mx-2"
        size="lg"
      />
      <UButton label="Login" to="/login" class="mx-2 px-4" size="lg" />

      <!-- <NuxtLink
        to="/"
        class="border px-4 py-1 rounded border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold"
        >Log In
      </NuxtLink> -->

      <UButton
        class="mx-2 px-2"
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>

    <!-- Navigation for mobile screen -->
    <transition name="slide">
      <div
        v-if="showSideMenu"
        class="lg:hidden fixed top-0 left-0 h-screen z-50 w-8/12 p-4 bg-white flex flex-col shadow-lg"
      >
        <div class="flex justify-end mb-4">
          <UIcon
            name="i-heroicons-x-mark-16-solid"
            color="mariner"
            class="lg:hidden ml-4 flex"
            @click="toggleSideMenu"
          />
        </div>
        <NuxtLink class="m-2 text-primary" to="/register/customer">
          Register as Customer
        </NuxtLink>
        <NuxtLink class="m-2 text-primary" to="/register/business">
          Register Business
        </NuxtLink>
        <hr />
        <NuxtLink
          to="/"
          class="border mt-5 px-4 py-1 w-fit rounded border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold"
        >
          Log In
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
