<script setup lang="ts">
import { ScrollArea } from "@ui/scroll-area/self";
import { Separator } from "@ui/separator/self";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);
</script>

<template>
  <Story title="Components/Scroll Area">
    <template #controls></template>

    <ScrollArea class="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>

        <div v-for="tag in tags" :key="tag">
          <div class="text-sm">
            {{ tag }}
          </div>
          <Separator class="my-2" />
        </div>
      </div>
    </ScrollArea>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
