<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "./self"
</script>

<template>
  <Story title="Components/Alert">
    <template #controls></template>

    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
