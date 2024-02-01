<script setup lang="ts">
/*
A patch to make sure that the ripple effect works as intended.
 */
import VWave from "v-wave";
import type { IVWaveDirectiveOptions } from "v-wave";

const props = withDefaults(
  defineProps<
    Partial<{ class: string; if: boolean } & IVWaveDirectiveOptions>
  >(),
  {
    duration: 0.25,
    if: true,
  },
);
const properties = { ...props };

for (const [key, value] of Object.entries(props)) {
  if (value) continue;

  delete properties[key as keyof typeof props];
}

const { vWave } = VWave.createLocalWaveDirective(properties);
</script>

<template>
  <div v-if="$props.if" aria-hidden v-wave class="absolute size-full" />
  <span :class="$props.class">
    <slot />
  </span>
</template>
