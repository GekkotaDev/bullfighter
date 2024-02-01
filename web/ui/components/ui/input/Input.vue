<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@utils/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  animate?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <!--
    TODO: Cleanup styles.
  -->
  <div className="relative bg-inherit">
    <input
      v-model="modelValue"
      :class="
        cn(
          'peer flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          props.class ?? '',
        )
      "
      placeholder=""
    />
    <label
      htmlFor="username"
      :class="`absolute text-xs cursor-text left-1
      dark:text-gray-400 bg-inherit mx-1 px-1 peer-placeholder-shown:text-sm
      peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400
      peer-placeholder-shown:top-2 peer-focus:text-black
      peer-focus:dark:text-white transition-all select-none
      pointer-events-none
      ${
        animate
          ? '-top-5 peer-focus:-top-5 text-gray-500 peer-focus:text-xs'
          : 'text-black/0 text-red peer-focus:text-black/0 peer-focus:text-sm'
      }`"
    >
      <slot />
    </label>
  </div>
</template>
