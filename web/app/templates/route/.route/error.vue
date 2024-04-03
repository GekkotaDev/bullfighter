<script setup lang="ts">
import { onError } from "../hooks";
import ErrorUI from "../+error.vue";
</script>

<template>
  <NuxtErrorBoundary @error="onError">
    <template #error>
      <!-- Error page.-->
      <ErrorUI />
    </template>

    <slot />
  </NuxtErrorBoundary>
</template>
