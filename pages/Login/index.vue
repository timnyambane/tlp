<script setup lang="ts">
import { string, objectAsync, email, minLength, type Input } from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  email: string([
    minLength(1, "E-mail cannot be blank"),
    email("Invalid email"),
  ]),
  password: string([minLength(1, "Password cannot be blank")]),
});

type Schema = Input<typeof schema>;

const loginDetails = reactive({
  email: "",
  password: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>
<template>
  <div>
    <h1 class="font-black lg:text-3xl text-3xl text-center m-4 lg:mt-20 mt-10">
      Login
    </h1>

    <UForm
      :schema="schema"
      :state="loginDetails"
      class="space-y-4 lg:w-1/4 w-4/5 mx-auto pb-6"
      @submit="onSubmit"
    >
      <UFormGroup label="Email" name="email" size="lg">
        <UInput
          v-model="loginDetails.email"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>

      <UFormGroup label="Password" name="password" size="lg">
        <UInput
          v-model="loginDetails.password"
          type="password"
          placeholder="**********"
          icon="i-heroicons-lock-closed-20-solid"
        />
      </UFormGroup>

      <div class="flex items-center justify-center">
        <UButton type="submit" class="px-20" size="lg">Login</UButton>
      </div>
    </UForm>
  </div>
</template>

<style scoped></style>
