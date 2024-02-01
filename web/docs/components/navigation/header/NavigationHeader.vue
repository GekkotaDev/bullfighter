<!-- ? Documentation
? -->

<script setup lang="ts">
$defineProps<{
  class?: {
    icon: string;
  };
}>();

const s = (_: string) => ["hover:", "bg-", "red-", "500"].join("");
</script>

<template>
  <nav class="flex flex-row items-center gap-x-4 border px-16 py-2">
    <span :class="$props?.class?.icon">
      <slot name="icon" />
    </span>

    <Search>Search.</Search>

    <!-- Relevant navigation header links -->
    <span class="flex flex-row gap-x-6">
      <slot />
    </span>

    <!-- Navigation header spacer -->
    <span aria-hidden class="w-full" />

    <div aria-label="Socials" class="flex flex-row gap-x-2">
      <slot name="socials" />
    </div>
  </nav>
</template>
