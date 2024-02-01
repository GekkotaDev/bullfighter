<script setup lang="ts">
import { Label } from "@ui/label/self";
import { Switch } from "@ui/switch/self";
</script>

<template>
  <Story title="Components/Switch">
    <template #controls></template>

    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label for="airplane-mode">Airplane Mode</Label>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
