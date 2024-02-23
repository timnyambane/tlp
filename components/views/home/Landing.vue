<script setup lang="ts">
const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
const selected = ref([]);
</script>

<template>
  <div class="mx-auto p-4">
    <h1 class="font-black lg:text-5xl text-3xl text-center m-4 mt-10">
      Connecting local customers with local service professionals
    </h1>

    <div
      class="multi-select flex flex-col sm:flex-row gap-4 w-2/3 my-10 mx-auto justify-evenly items-center"
    >
      <USelectMenu
        v-model="selected"
        searchable
        :options="people"
        class="flex-1 text-center"
        size="xl"
        placeholder="Choose a Service Category"
      />
      <USelectMenu
        v-model="selected"
        searchable
        :options="people"
        class="flex-1 text-center"
        size="xl"
        padding="p-8"
        placeholder="Choose your Location"
      />
      <UButton
        label="Get a free quote"
        class="flex-1 justify-center flex"
        size="xl"
      />
    </div>
    <div class="container mx-auto">
      <img
        src="/assets/images/landing-img.png"
        alt="Landing Image"
      >
    </div>
  </div>
</template>
