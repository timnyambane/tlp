<script setup lang="ts">
import {
  string,
  object,
  objectAsync,
  email,
  minLength,
  maxLength,
  regex,
} from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const PasswordSchema = object({
  password1: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password is too short."),
    maxLength(30, "Your password is too long."),
    regex(/[a-z]/, "Your password must contain a lowercase letter."),
    regex(/[A-Z]/, "Your password must contain a uppercase letter."),
    regex(/[0-9]/, "Your password must contain a number."),
  ]),
  password2: string(),
});

const schema = objectAsync({
  name: string([minLength(3, "Full Name cannot be shorter than 3 letters")]),
  email: string([
    minLength(1, "Please enter your email."),
    email("The email is badly formatted."),
    maxLength(30, "Your email is too long."),
  ]),
  password: PasswordSchema.entries.password1,
  confirmPassword: PasswordSchema.entries.password2,
  phoneNumber: string([
    minLength(10, "Phone number must be at least 10 digits."),
    maxLength(10, "Phone number must be at most 10 digits."),
  ]),
  //phoneNumber: number([toMinValue(10)]),
});

const registerDetails = reactive({
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

async function onSubmit(event: FormSubmitEvent<typeof schema>) {
  console.log(event.data);
}
</script>
<template>
  <div>
    <h1
      class="font-black lg:text-3xl text-3xl text-center m-4 lg:mt-20 mt-10 gap-4"
    >
      Register as Customer
    </h1>
    <ClientOnly
      ><UForm
        :schema="schema"
        :state="registerDetails"
        class="gap-4 lg:w-1/3 w-3/4 flex-col mx-auto flex pb-6"
        @submit="onSubmit"
      >
        <UFormGroup label="Full Names" name="name" size="lg">
          <UInput
            v-model="registerDetails.name"
            placeholder="Full Names"
            icon="i-heroicons-user-circle-solid"
          />
        </UFormGroup>
        <UFormGroup label="Email" name="email" size="lg">
          <UInput
            v-model="registerDetails.email"
            placeholder="you@example.com"
            type="email"
            icon="i-heroicons-envelope"
          />
        </UFormGroup>

        <UFormGroup label="Phone Number" name="phoneNumber" size="lg">
          <UInput
            v-model="registerDetails.phoneNumber"
            type="text"
            placeholder="+44123456789"
            icon="i-heroicons-phone-20-solid"
          />
        </UFormGroup>
        <div class="flex flex-col lg:flex-row gap-4">
          <UFormGroup label="Password" name="password" size="lg" class="flex-1">
            <UInput
              v-model="registerDetails.password"
              type="password"
              placeholder="**********"
              icon="i-heroicons-lock-closed-20-solid"
            />
          </UFormGroup>

          <UFormGroup
            label="Confirm Password"
            name="confirmPassword"
            size="lg"
            class="flex-1"
          >
            <UInput
              v-model="registerDetails.confirmPassword"
              type="password"
              placeholder="**********"
              icon="i-heroicons-lock-closed-20-solid"
            />
          </UFormGroup>
        </div>
        <div class="flex my-2 justify-center items-center">
          <UButton
            type="submit"
            class="w-fit py-2 px-20"
            size="xl"
            label="Register"
          />
        </div> </UForm
    ></ClientOnly>
  </div>
</template>

<style scoped></style>
