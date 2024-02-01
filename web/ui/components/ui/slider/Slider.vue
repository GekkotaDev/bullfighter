<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "radix-vue";
import {
  SliderRange,
  SliderRoot,
  SliderTrack,
  useEmitAsProps,
} from "radix-vue";
import { cn } from "@utils/utils";

const props = defineProps<SliderRootProps>();
const emits = defineEmits<SliderRootEmits>();
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center',
        $attrs.class ?? '',
      )
    "
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <SliderTrack
      class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
    >
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <slot />
  </SliderRoot>
</template>
