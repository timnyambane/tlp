<script setup lang="ts">
import { reactive } from "vue";

const showError = reactive({ email: false, password: false });
const loginDetails = reactive({
  email: null,
  password: null,
  loading: false,
});

const onSubmit = async () => {
  let hasError = false;

  if (!loginDetails.email) {
    showError.email = true;
    hasError = true;
  }
  if (!loginDetails.password) {
    showError.password = true;
    hasError = true;
  }

  if (!hasError) {
    console.log(loginDetails);
    loginDetails.loading = true;

    setTimeout(() => {
      loginDetails.loading = false;
    }, 3000);
  }
};
</script>
<template>
  <div>
    <h1 class="font-black lg:text-3xl text-3xl text-center m-4 lg:mt-20 mt-10">
      Login
    </h1>

    <UForm
      :state="loginDetails"
      class="space-y-4 lg:w-1/4 w-4/5 mx-auto pb-6"
      @submit="onSubmit"
    >
      <UFormGroup
        label="Email"
        name="email"
        size="lg"
        :error="showError.email && 'You must enter an email'"
        @input="
          () => {
            showError.email = false;
          }
        "
      >
        <UInput
          v-model="loginDetails.email"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>

      <UFormGroup
        label="Password"
        name="password"
        size="lg"
        :error="showError.password && 'You must enter a password'"
        @input="
          () => {
            showError.password = false;
          }
        "
      >
        <UInput
          v-model="loginDetails.password"
          type="password"
          placeholder="**********"
          icon="i-heroicons-lock-closed-20-solid"
        />
      </UFormGroup>

      <div class="flex items-center justify-center">
        <UButton
          :loading="loginDetails.loading"
          type="submit"
          class="px-20"
          size="lg"
          >Login</UButton
        >
      </div>
    </UForm>
  </div>
</template>

<style scoped></style>
