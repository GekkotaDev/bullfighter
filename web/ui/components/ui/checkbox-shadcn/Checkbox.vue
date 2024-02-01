<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@utils/utils";

const props = defineProps<CheckboxRootProps>();
const emits = defineEmits<CheckboxRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        $attrs.class ?? '',
      )
    "
  >
    <CheckboxIndicator
      class="flex h-full w-full items-center justify-center text-current"
    />
  </CheckboxRoot>
</template>

<style scoped>
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 8px;
  position: relative;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: red;
  transform: translate(8px, 13px) rotate(-45deg);
  transform-origin: left;
  transition: 150ms all linear;
  transition-delay: 0ms;
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: red;
  transform: translate(1px, 8px) rotate(45deg);
  transform-origin: left;
  transition: 150ms all linear;
  transition-delay: 150ms;
}

input[type="checkbox"]:checked::before {
  width: 14px;
  transition-delay: 150ms;
}

input[type="checkbox"]:checked::after {
  width: 10px;
  transition-delay: 0ms;
}
</style>
