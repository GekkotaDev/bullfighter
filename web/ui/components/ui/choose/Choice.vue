<script setup lang="ts">
import { SelectItem } from "@ui/select/self";

defineProps<{ class?: string; value: string }>();
</script>

<template>
  <SelectItem :class="$props.class" :value="value">
    <slot />
  </SelectItem>
</template>
