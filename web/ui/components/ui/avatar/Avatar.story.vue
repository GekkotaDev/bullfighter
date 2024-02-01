<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "./self";
</script>

<template>
  <Story title="Components/Avatar">
    <template #controls></template>

    <Avatar>
      <AvatarImage src="vite.svg" alt="Vite Logo" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
