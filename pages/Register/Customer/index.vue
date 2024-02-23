<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import type { CustomerRegisterDetails } from "~/data";

const schema = z.object({
  name: z
    .string()
    .min(1, "Full Name is required")
    .min(3, "Full Name cannot be shorter than 3 letters")
    .refine(
      (value: string) => {
        const names = value.trim().split(" ");
        return names.length >= 2;
      },
      {
        message: "Full Name should contain at least two names",
      }
    ),
  email: z.string().min(1, "E-mail is required").email("E-mail is not valid"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .regex(/^\+44\d{10}$/, {
      message: "Phone Number should start with +44 and be 10 digits",
    })
    .transform((val: string) => val?.replace(/^\+/, "")),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one capital letter"),
  confirmPassword: z
    .string()
    .min(1, "Password confirmation is required")
    .refine((data: any) => data.confirmPassword === data.password, {
      message: "Passwords don't match.",
      path: ["confirmPassword"],
    }),
});

type Schema = z.output<typeof schema>;

const registerDetails: CustomerRegisterDetails = reactive({
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
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
    <ClientOnly>
      <UForm
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
        </div>
      </UForm>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
