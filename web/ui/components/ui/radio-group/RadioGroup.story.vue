<script setup lang="ts">
import { Label } from "@ui/label/self";
import { RadioGroup, RadioGroupItem } from "@ui/radio-group/self";
</script>

<template>
  <Story title="Components/Radio Group">
    <template #controls></template>

    <RadioGroup default-value="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r1" value="default" />
        <Label for="r1">Default</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label for="r2">Comfortable</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r3" value="compact" />
        <Label for="r3">Compact</Label>
      </div>
    </RadioGroup>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
