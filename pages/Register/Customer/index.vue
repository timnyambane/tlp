<script setup lang="ts">
import { reactive } from "vue";
const showError = reactive({
  name: false,
  email: false,
  password: false,
  confirmPassord: false,
  phoneNumber: false,
});
const registerDetails = reactive({
  name: null,
  email: null,
  password: null,
  confirmPassord: null,
  phoneNumber: null,
  loading: false,
});

const onSubmit = async () => {
  let hasError = false;

  if (!registerDetails.name) {
    showError.name = true;
    hasError = true;
  }
  if (!registerDetails.email) {
    showError.email = true;
    hasError = true;
  }
  if (!registerDetails.phoneNumber) {
    showError.phoneNumber = true;
    hasError = true;
  }
  if (!registerDetails.password) {
    showError.password = true;
    hasError = true;
  }
  if (!registerDetails.confirmPassord) {
    showError.confirmPassord = true;
    hasError = true;
  } else if (registerDetails.password !== registerDetails.confirmPassord) {
    showError.confirmPassord = true;
    hasError = true;
  }

  if (!hasError) {
    console.log(registerDetails);
    registerDetails.loading = true;

    setTimeout(() => {
      registerDetails.loading = false;
    }, 3000);
  }
};
</script>
<template>
  <div>
    <h1
      class="font-black lg:text-3xl text-3xl text-center m-4 lg:mt-20 mt-10 gap-4"
    >
      Register as Customer
    </h1>
    <UForm
      :state="registerDetails"
      class="gap-4 lg:w-1/2 w-4/5 flex-col mx-auto flex pb-6"
      @submit="onSubmit"
    >
      <div class="flex flex-col lg:flex-row gap-5">
        <div class="flex gap-2 flex-col flex-1">
          <UFormGroup
            label="Full Names"
            name="names"
            size="lg"
            :error="showError.name && 'You must enter both names'"
            @input="
              () => {
                showError.name = false;
              }
            "
          >
            <UInput
              v-model="registerDetails.name"
              placeholder="Full Names"
              icon="i-heroicons-user-circle-solid"
            />
          </UFormGroup>
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
              v-model="registerDetails.email"
              placeholder="you@example.com"
              type="email"
              icon="i-heroicons-envelope"
            />
          </UFormGroup>

          <UFormGroup
            label="Phone Number"
            name="mobile-number"
            size="lg"
            :error="showError.phoneNumber && 'You must enter a phone number'"
            @input="
              () => {
                showError.phoneNumber = false;
              }
            "
          >
            <UInput
              v-model="registerDetails.phoneNumber"
              type="number"
              placeholder="**********"
              icon="i-heroicons-phone-20-solid"
            />
          </UFormGroup>
        </div>

        <div class="flex gap-2 flex-col flex-1">
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
              v-model="registerDetails.password"
              type="password"
              placeholder="**********"
              icon="i-heroicons-lock-closed-20-solid"
            />
          </UFormGroup>

          <UFormGroup
            label="Confirm Password"
            name="confirm-password"
            size="lg"
            :error="showError.confirmPassord && 'The passwords do not match'"
            @input="
              () => {
                showError.confirmPassord = false;
              }
            "
          >
            <UInput
              v-model="registerDetails.confirmPassord"
              type="password"
              placeholder="**********"
              icon="i-heroicons-lock-closed-20-solid"
            />
          </UFormGroup>
          <UFormGroup
            label="Privacy policy"
            size="lg"
            @input="
              () => {
                showError.password = false;
              }
            "
          >
            <UCheckbox label="Agree to Terms & Conditions" required />
          </UFormGroup>
        </div>
      </div>
      <div class="flex my-2 justify-center items-center">
        <UButton
          type="submit"
          :loading="registerDetails.loading"
          class="w-fit py-2 px-20"
          size="xl"
          label="Register"
        />
      </div>
    </UForm>
  </div>
</template>

<style scoped></style>
