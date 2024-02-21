<script setup lang="ts"></script>
<template>
  <div class="mx-auto p-4 mission bg-lightBlue dark:bg-gray-800">
    <h1 class="font-black lg:text-5xl text-3xl text-center m-4 mt-10">
      Our Mission
    </h1>
    <div
      class="flex flex-col sm:flex-row items-center sm:px-28 px-5 gap-5 sm:container justify-evenly mt-10 mx-auto"
    >
      <div
        class="card z-10 bg-white dark:bg-slate-900 p-10 rounded-md shadow-lg h-[25rem] flex flex-1 flex-col items-center"
      >
        <img src="/assets/images/connect.png" alt="" class="w-48" />
        <h3 class="text-bold font-bold text-xl m-3 text-primary">Connect</h3>
        <h4 class="text-center">
          Connect with business and build local communities
        </h4>
      </div>
      <div
        class="card z-10 bg-white dark:bg-slate-900 p-10 rounded-md shadow-lg h-[25rem] flex flex-1 flex-col items-center"
      >
        <img src="/assets/images/give.png" alt="" class="w-48" />
        <h3 class="text-bold font-bold text-xl m-3 text-primary">Give</h3>
        <h4 class="text-center">
          Giving an opportunity to all local businesses to be able to succeed
          and not have to compete with big companies and the power of the
          internet
        </h4>
      </div>
      <div
        class="card z-10 bg-white dark:bg-slate-900 p-10 rounded-md shadow-lg h-[25rem] flex flex-1 flex-col items-center"
      >
        <img src="/assets/images/build.png" alt="" class="w-48" />
        <h3 class="text-bold font-bold text-xl m-3 text-primary">Build</h3>
        <h4 class="text-center">
          Build trusted relationships in all local areas by giving customers
          fair prices and peace of mind
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mission {
  position: relative;
}

.mission::before {
  content: "";
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #8fcaf1;
  position: absolute;
  bottom: 350px;
  left: 250px;
}
.mission::after {
  content: "";
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #8fcaf1;
  position: absolute;
  bottom: -50px;
  right: 250px;
}
</style>
