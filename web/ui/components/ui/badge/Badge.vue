<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "./self";
import { cn } from "@utils/utils";

import { Ripple } from "@ui/ripple/self";

interface BadgeVariantProps extends VariantProps<typeof badgeVariants> {}

interface Props {
  variant?: BadgeVariantProps["variant"];
  ripple?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $attrs.class ?? '')">
    <Ripple :if="ripple ?? false" class="px-2.5 py-0.5">
      <slot />
    </Ripple>
  </div>
</template>
