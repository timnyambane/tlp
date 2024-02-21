<script setup lang="ts">
const items = [
  {
    image: "https://picsum.photos/1920/1080?random=1",
    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    image: "https://picsum.photos/1920/1080?random=2",
    text: "Consectetur adipiscing elit Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
  {
    image: "https://picsum.photos/1920/1080?random=3",
    text: "Integer molestie luctus diam Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
  {
    image: "https://picsum.photos/1920/1080?random=4",
    text: "Suspendisse potenti Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
  {
    image: "https://picsum.photos/1920/1080?random=5",
    text: "Donec euismod libero vitae est Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
  {
    image: "https://picsum.photos/1920/1080?random=6",
    text: "Praesent commodo cursus magna Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
  {
    image: "https://picsum.photos/1920/1080?random=6",
    text: "Praesent commodo cursus magna Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
  },
];
</script>
<template>
  <div class="mx-auto p-4">
    <h1 class="font-black lg:text-5xl text-3xl text-center my-10">
      What our service providers say
    </h1>

    <UCarousel
      arrows
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis-full md:basis-4/5 lg:basis-1/5 justify-center mx-2 rounded-lg',
        container:
          'w-full px-10 flex items-center justify-center overflow-x-hidden',
        wrapper: 'flex lg:px-10 px-4 mx-4 lg:mx-24',
      }"
    >
      <div
        class="flex flex-col gap-4 items-center dark:bg-slate-900 p-4 rounded-lg justify-center"
      >
        <img
          :src="item.image"
          class="w-32 h-32 rounded-full object-cover mb-4"
          draggable="false"
        />
        <div class="text-center">
          {{ item.text }}
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<style scoped></style>
