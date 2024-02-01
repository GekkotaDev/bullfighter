<script setup lang="ts">
import { Button } from "@ui/button/self";
import { Ripple } from "@ui/ripple/self";

const count = ref(0);
</script>

<template>
  <Story title="Components/Button">
    <template #controls></template>

    <Button @click="count++">
      <Ripple> Count: {{ count }} </Ripple>
    </Button>
    <Button @click="count = 0" variant="outline">
      <Ripple> Reset </Ripple>
    </Button>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
