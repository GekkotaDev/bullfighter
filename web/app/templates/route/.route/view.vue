<script setup lang="ts">
import type { StyleValue } from "vue";

import ErrorUI from "./error.vue";
import LoadingUI from "./loading.vue";

$defineProps<{
  class?: string;
  style?: StyleValue;
}>();
</script>

<template>
  <ErrorUI>
    <LoadingUI>
      <div :class :style>
        <slot />
      </div>
    </LoadingUI>
  </ErrorUI>
</template>
