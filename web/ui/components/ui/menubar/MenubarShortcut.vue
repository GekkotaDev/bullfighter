<script setup lang="ts">
import { cn } from "@utils/utils";
</script>

<template>
  <span
    :class="
      cn('text-xs ml-auto tracking-widest opacity-50', $attrs.class ?? '')
    "
  >
    <slot />
  </span>
</template>
