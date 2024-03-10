<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: Partial<NuxtError>
}>();

const errorCodes: Record<number, string> = {
  404: "Page not found"
};

if (import.meta.dev) {
  console.error(error);
}

const defaultMessage = "Something went wrong";

const message = error.message ?? errorCodes[error.statusCode!] ?? defaultMessage;

async function goBack () {
  try {
    await clearError({
      redirect: "/"
    });
  } catch (err) {
    console.error(err);
  }
}

</script>

<template>
  <PageContent>
    <form
      class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
      @submit.prevent>
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">
          {{ error.statusCode }}
        </p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          {{ message }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            @click="goBack">
            Go back home
          </button>
        </div>
      </div>
    </form>
  </PageContent>
</template>

<style scoped>

</style>
