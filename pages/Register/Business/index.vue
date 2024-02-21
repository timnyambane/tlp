<script setup lang="ts">
import {
  string,
  object,
  objectAsync,
  email,
  minLength,
  maxLength,
  regex,
  forward,
  custom,
  array,
} from "valibot";
import { locations, jobCategories } from "../../../data";
import type { RegisterDetails, ValidationContext } from "../../../data";

const registerDetails: RegisterDetails = reactive({
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  businessName: "",
  businessLocation: "",
  workCategory: "",
  services: [],
});

function comparePasswords(value: string, context: ValidationContext) {
  const { parent } = context;
  const password1 = (parent as Record<string, unknown>)["password1"];

  if (!password1 || value !== String(password1)) {
    context.addError("password2", "Passwords do not match.");
  }
}

const PasswordSchema = object(
  {
    password1: string([
      minLength(1, "Please enter your password."),
      minLength(8, "Your password must have 8 characters or more."),
    ]),
    password2: string(),
  },
  [
    custom(
      (input: { password1: string; password2: string }) =>
        input.password1 === input.password2,
      "The two passwords do not match."
    ),
  ]
);

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
  businessName: string([minLength(1, "Please enter your business name.")]),
  businessLocation: string([
    minLength(1, "Please enter your business location."),
  ]),
  workCategory: string([minLength(1, "Please choose your work category")]),
  services: array(string(), "At least one service is required."),
});

const selectedServices = computed(() => {
  const selectedCategory = registerDetails.workCategory;
  return selectedCategory ? jobCategories[selectedCategory] : [];
});

const resetSelectedServices = () => {
  registerDetails.services = [];
};

watch(() => registerDetails.workCategory, resetSelectedServices);

async function onSubmit() {
  console.log(registerDetails);
}
</script>
<template>
  <div>
    <h1
      class="font-black lg:text-3xl text-3xl text-center m-4 lg:mt-20 mt-10 gap-4"
    >
      Register as Business
    </h1>
    <ClientOnly>
      <UForm
        :schema="schema"
        :state="registerDetails"
        class="gap-4 lg:w-1/2 w-4/5 flex-col mx-auto flex pb-6"
        @submit="onSubmit"
      >
        <div class="flex flex-col lg:flex-row gap-5">
          <div class="flex gap-4 flex-col flex-1">
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
            <div class="flex lg:flex-row flex-col gap-4">
              <UFormGroup label="Password" name="password" size="lg">
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
              >
                <UInput
                  v-model="registerDetails.confirmPassword"
                  type="password"
                  placeholder="**********"
                  icon="i-heroicons-lock-closed-20-solid"
                />
              </UFormGroup>
            </div>
          </div>

          <div class="flex gap-4 flex-col flex-1">
            <UFormGroup label="Business Name" name="businessName" size="lg">
              <UInput
                v-model="registerDetails.businessName"
                type="text"
                placeholder="Business Name"
                icon="i-heroicons-building-storefront-solid"
              />
            </UFormGroup>

            <UFormGroup
              label="Business Location"
              name="businessLocation"
              size="lg"
            >
              <USelectMenu
                searchable
                v-model="registerDetails.businessLocation"
                :options="locations"
                placeholder="Choose your Location"
                icon="i-heroicons-map-pin-solid"
              />
            </UFormGroup>
            <UFormGroup label="Work Category" name="workCategory" size="lg">
              <USelectMenu
                searchable
                v-model="registerDetails.workCategory"
                :options="Object.keys(jobCategories)"
                placeholder="Choose your category"
                icon="i-heroicons-queue-list"
              />
            </UFormGroup>
            <UFormGroup label="Services we provide" name="services" size="lg">
              <USelectMenu
                multiple
                v-model="registerDetails.services"
                :options="selectedServices"
                placeholder="Select from the options"
                icon="i-heroicons-queue-list"
              />
            </UFormGroup>
          </div>
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
