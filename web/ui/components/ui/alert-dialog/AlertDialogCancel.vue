<script setup lang="ts">
import { AlertDialogCancel, type AlertDialogCancelProps } from "radix-vue";
import { cn } from "@utils/utils";
import { buttonVariants } from "@ui/button/self";

const props = defineProps<AlertDialogCancelProps>();
</script>

<template>
  <AlertDialogCancel
    v-bind="props"
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'mt-2 sm:mt-0',
        $attrs.class ?? '',
        'hover:bg-transparen',
      )
    "
  >
    <slot />
  </AlertDialogCancel>
</template>
