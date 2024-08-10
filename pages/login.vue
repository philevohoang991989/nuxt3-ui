<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '../node_modules/@nuxt/ui/dist/runtime/types'
import type {z} from 'zod'
import { LoginValidationSchema } from '~/schemas/LoginSchema';

const formLogin = ref({
  username: "",
  password: "",
});

function handleFormSubmit(event: FormSubmitEvent<z.output<typeof LoginValidationSchema>>){
    console.log(event);
    
}
</script>

<template>
  <UContainer class="gird place-content-center h-screen">
    <UCard class="w-[500px]">
      <template #header>
        <h2 class="text-xl font-bold">Login</h2>
      </template>
      <UForm :schema="LoginValidationSchema" :state="formLogin" class="space-y-4" @submit=>
        <UFormGroup name="username" label="Username">
          <UInput
            v-model="formLogin.username"
            type="text"
            placeholder="username"
          />
        </UFormGroup>
        <UFormGroup name="password" label="Password">
          <UInput
            v-model="formLogin.password"
            type="password"
            placeholder="password"
          />
        </UFormGroup><UButton type="submit" class="w-full flex justify-center" size="lg">Login</UButton>
      </UForm>
      
    </UCard>
  </UContainer>
</template>
