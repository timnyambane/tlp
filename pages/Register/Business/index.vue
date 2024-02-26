<script setup lang="ts">
import { locations, jobCategories, fakeStripePackages } from "../../../data";
import type { BusinessRegisterDetails } from "../../../data";

const registerDetails: BusinessRegisterDetails = reactive({
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

const btnLinks = [
  {
    label: "Personal Details",
    icon: "i-heroicons-home",
    registerStep: "first-step",
  },
  {
    label: "Business Details",
    icon: "i-heroicons-square-3-stack-3d",
    registerStep: "second-step",
  },
  {
    label: "Payment Details",
    icon: "i-heroicons-link",
    registerStep: "third-step",
  },
];

const showLoading = ref(false);
const stepRegistrationName = ref("first-step");

const selectedServices = computed(() => {
  const selectedCategory = registerDetails.workCategory;
  return selectedCategory ? jobCategories[selectedCategory] : [];
});

const resetSelectedServices = () => {
  registerDetails.services = [];
};

const goToPreviousStep = () => {
  switch (stepRegistrationName.value) {
    case "second-step":
      stepRegistrationName.value = "first-step";
      break;
    case "third-step":
      stepRegistrationName.value = "second-step";
      break;
    default:
      break;
  }
};

watch(() => registerDetails.workCategory, resetSelectedServices);

const handleRegisterClick = () => {
  switch (stepRegistrationName.value) {
    case "first-step":
      stepRegistrationName.value = "second-step";
      break;
    case "second-step":
      stepRegistrationName.value = "third-step";
      break;
    case "third-step":
      submitForm();
      break;
    default:
      break;
  }
};

function handleStepClick({ registerStep }: { registerStep: string }) {
  stepRegistrationName.value = registerStep;
}

const btnTitle = computed(() => {
  switch (stepRegistrationName.value) {
    case "first-step":
      return "Next Step";
    case "second-step":
      return "Next Step";
    case "third-step":
      return "Register";
    default:
      return "";
  }
});

async function submitForm() {}
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
        :state="registerDetails"
        class="gap-4 lg:w-1/2 w-4/5 flex-col mx-auto flex"
      >
        <div class="px-4 sm:px-6 lg:px-8">
          <UButton
            size="sm"
            color="primary"
            variant="link"
            label="Back"
            @click="goToPreviousStep"
            :class="
              stepRegistrationName == 'first-step' ? 'opacity-0' : 'opacity-100'
            "
          />

          <div class="flex justify-center items-center py-2">
            <template v-for="(button, index) in btnLinks">
              <span
                class="flex justify-center items-center mr-4"
                v-if="
                  index > 0 &&
                  btnLinks[index - 1].registerStep !== button.registerStep
                "
                :key="index + '-separator'"
              >
                <UIcon name="i-heroicons-chevron-right-16-solid" />
              </span>

              <UButton
                :color="
                  stepRegistrationName === button.registerStep
                    ? 'primary'
                    : 'gray'
                "
                :icon="button.icon"
                variant="link"
                :label="button.label"
              />
            </template>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-5 justify-center">
          <div
            v-if="stepRegistrationName === 'first-step'"
            class="flex gap-4 flex-col w-3/5"
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
            <div class="flex lg:flex-row flex-col gap-4">
              <UFormGroup
                label="Password"
                name="password"
                size="lg"
                class="flex-1"
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
          </div>

          <div
            v-if="stepRegistrationName === 'second-step'"
            class="flex flex-col w-3/5 gap-4"
          >
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
                v-model="registerDetails.businessLocation"
                searchable
                :options="locations"
                placeholder="Choose your Location"
                icon="i-heroicons-map-pin-solid"
              />
            </UFormGroup>
            <UFormGroup label="Work Category" name="workCategory" size="lg">
              <USelectMenu
                v-model="registerDetails.workCategory"
                searchable
                :options="Object.keys(jobCategories)"
                placeholder="Choose your category"
                icon="i-heroicons-queue-list"
              />
            </UFormGroup>
            <UFormGroup label="Services we provide" name="services" size="lg">
              <USelectMenu
                v-model="registerDetails.services"
                multiple
                :options="selectedServices"
                placeholder="Select from the options"
                icon="i-heroicons-queue-list"
              />
            </UFormGroup>
          </div>
          <div
            v-if="stepRegistrationName === 'third-step'"
            class="flex gap-4 flex-col w-full"
          >
            <div class="flex gap-4">
              <UCard
                v-for="stripe in fakeStripePackages"
                :key="stripe.id"
                class="p-2 gap-4"
                variant="patternBlue"
              >
                <template #header>
                  <Placeholder class="h-8" />
                </template>

                {{ stripe }}

                <template #footer>
                  <Placeholder class="h-8" />
                </template>
              </UCard>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <UButton
            :loading="showLoading"
            type="submit"
            class="w-fit py-2 px-20"
            size="xl"
            @click="handleRegisterClick"
            :label="btnTitle"
          />
        </div>
      </UForm>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
