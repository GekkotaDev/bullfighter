<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@ui/button/self";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./self";

const isOpen = ref(false);
</script>

<template>
  <Story title="Components/Collapsible">
    <template #controls></template>

    <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger as-child>
          <Button variant="ghost" size="sm" class="w-9 p-0">
            <Button variant="ghost">⇅</Button>
            <span class="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm bg-secondary">
        @radix-ui/primitives
      </div>
      <CollapsibleContent class="space-y-2">
        <div class="rounded-md border px-4 py-3 font-mono text-sm bg-secondary">
          @radix-ui/colors
        </div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm bg-secondary">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
