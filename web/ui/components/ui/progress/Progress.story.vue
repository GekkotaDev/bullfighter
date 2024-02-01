<script setup lang="ts">
import { ref } from "vue";
import { Progress } from "@ui/progress/self";

const progress = ref(1);
</script>

<template>
  <Story title="Components/Progress">
    <template #controls></template>

    <button @click="progress--">-</button>
    <button @click="progress++">+</button>
    {{ progress }}

    <Progress v-model="progress" class="w-[60%]" />
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
