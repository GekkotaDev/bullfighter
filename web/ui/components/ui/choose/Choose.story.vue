<script setup lang="ts">
import { Choice, Choose } from "@ui/choose/self";
</script>

<template>
  <Story title="Components/Choose">
    <template #controls></template>

    <div class="p-2">
      <Choose placeholder="Select a number">
        <Choice :value="`${i}`" v-for="i in 25">{{ i }}</Choice>
      </Choose>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
An opinionated wrapper for the `<Select/>` component.

The `<Choose />` component is best used for cases where a complex hierarchy is
not needed within the selection list. In addition it also automatically inserts
a `<ScrollView/ >` so that the list does not overflow outside of the viewport
</docs>
