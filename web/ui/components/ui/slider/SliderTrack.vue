<script setup lang="ts">
import { SliderRange, SliderTrack } from "radix-vue";
</script>

<template>
  <SliderTrack
    class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
  >
    <SliderRange class="absolute h-full bg-primary" />
  </SliderTrack>
</template>
