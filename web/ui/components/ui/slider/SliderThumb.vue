<script setup lang="ts">
import { SliderThumb } from "radix-vue";
</script>

<template>
  <SliderThumb
    class="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  />
</template>
