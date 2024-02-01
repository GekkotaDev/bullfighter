<script setup lang="ts">
import type { IVWaveDirectiveOptions } from "v-wave";

import { Primitive, type PrimitiveProps } from "radix-vue";

import { cn } from "@@/utils/utils";

import { buttonVariants } from "./self";

interface Props extends PrimitiveProps {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  as?: string;
  ripple?: boolean;
  rippleProps?: Partial<IVWaveDirectiveOptions>;
}

withDefaults(defineProps<Props>(), {
  as: "button",
  ripple: true,
});
</script>

<template>
  <Primitive
    :as="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <UiRipple :if="variant !== 'link' && ripple" v-bind="rippleProps" />
    <slot />
  </Primitive>
</template>

<style></style>
