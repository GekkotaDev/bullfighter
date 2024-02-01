<script setup lang="ts">
import { toast, Toaster } from "vue-sonner";
import { Button } from "@ui/button/self";
</script>

<template>
  <Story title="Components/Sonner">
    <template #controls></template>

    <Toaster />
    <Button
      variant="outline"
      @click="
        () => {
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }
      "
    >
      Add to calendar
    </Button>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
