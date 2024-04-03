<script setup lang="ts">
import { onFallback, onPending, onResolved } from "../hooks";
import LoadingUI from "../+loading.vue";
</script>

<template>
  <Suspense @fallback="onFallback" @pending="onPending" @resolve="onResolved">
    <template #fallback>
      <!-- Pending UI. -->
      <LoadingUI />
    </template>

    <slot />
  </Suspense>
</template>
