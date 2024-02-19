<script setup lang="ts"></script>
<template>
  <div
    class="flex dark:bg-slate-900 pt-10 mx-auto flex-col justify-center items-center shadow-lg"
  >
    <div>
      <img src="/assets/images/lp-logo.png" alt="Footer Logo" class="h-12" />
    </div>
    <div
      class="flex w-[90%] justify-evenly m-5 pb-10 mt-10 border-b-2 flex-col sm:flex-row items-center"
    >
      <NuxtLink class="hover:text-primary my-2 py-1 w-full text-center" to="/"
        >Post a job</NuxtLink
      >
      <NuxtLink class="hover:text-primary my-2 py-1 w-full text-center" to="/"
        >Business directory</NuxtLink
      >
      <NuxtLink class="hover:text-primary my-2 py-1 w-full text-center" to="/"
        >Register a User</NuxtLink
      >
      <NuxtLink class="hover:text-primary my-2 py-1 w-full text-center" to="/"
        >Register a Business</NuxtLink
      >
      <NuxtLink class="hover:text-primary my-2 py-1 w-full text-center" to="/"
        >Contact Us</NuxtLink
      >
    </div>
    <div class="flex items-center m-3 justify-around w-[90%]">
      <div class="flex gap-2 flex-col sm:flex-row">
        <NuxtLink to="/" class="underline text-start">Terms of use</NuxtLink>
        <NuxtLink to="/" class="underline text-start">Privacy policy</NuxtLink>
      </div>
      <h3 class="text-center">©The Local Pro, 2024</h3>
      <div class="icons flex items-center sm:gap-4 gap-2">
        <NuxtLink to="/" target="blank"
          ><img src="/assets/images/facebook.png" class="w-8" alt=""
        /></NuxtLink>
        <NuxtLink to="/" target="blank"
          ><img src="/assets/images/instagram.png" class="w-8" alt=""
        /></NuxtLink>
        <NuxtLink to="/" target="blank"
          ><img src="/assets/images/linkedin.png" class="w-8" alt=""
        /></NuxtLink>
        <NuxtLink to="/" target="blank"
          ><img src="/assets/images/twitter.png" class="w-8" alt=""
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
