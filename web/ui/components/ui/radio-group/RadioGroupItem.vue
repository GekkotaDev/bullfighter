<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
} from "radix-vue";
import { cn } from "@utils/utils";

const props = defineProps<RadioGroupItemProps & { class?: string }>();
</script>

<template>
  <RadioGroupItem
    v-bind="props"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      :class="
        cn('flex items-center justify-center radio-indicator', props.class)
      "
    >
      <div aria-hidden class="bg-foreground rounded-full size-2"></div>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

<style scoped>
@keyframes scale-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.radio-indicator[data-state="checked"] {
  animation: scale-in 200ms ease-out;
}
</style>
