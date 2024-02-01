<script setup lang="ts">
import { AspectRatio, type AspectRatioProps } from "radix-vue";

const props = defineProps<AspectRatioProps>();
</script>

<template>
  <AspectRatio class="select-none" v-bind="props">
    <slot />
  </AspectRatio>
</template>
