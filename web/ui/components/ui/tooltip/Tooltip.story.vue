<script setup lang="ts">
import { Button } from "@ui/button/self";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip/self";
</script>

<template>
  <Story title="Components/Tooltip">
    <template #controls></template>

    <div class="p-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline"> Hover </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
