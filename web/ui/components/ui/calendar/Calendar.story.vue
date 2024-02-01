<script setup lang="ts">
import { ref } from "vue";
import { Calendar } from "./self";

const date = ref(new Date());
</script>

<template>
  <Story title="Components/Calendar">
    <template #controls></template>

    <Calendar v-model="date" class="rounded-md border" />
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
