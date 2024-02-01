<script setup lang="ts">
import { Separator, type SeparatorProps } from "radix-vue";
import { cn } from "@utils/utils";

const props = defineProps<SeparatorProps & { class?: string }>();
</script>

<template>
  <Separator
    :orientation="orientation"
    :class="[
      cn('shrink-0 bg-secondary', props.class),
      props.orientation === 'vertical' ? 'w-[1.5px] h-full' : 'h-px w-full',
    ]"
  />
</template>
