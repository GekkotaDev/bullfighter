<script setup lang="ts">
import Toaster from "@ui/toast/Toaster.vue";
import { Button } from "@ui/button/self";
import { useToast } from "@ui/toast/use-toast";

const { toast } = useToast();
</script>

<template>
  <Story title="Components/Toast">
    <template #controls></template>

    <Toaster />
    <Button
      variant="outline"
      @click="
        () => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }
      "
    >
      Add to calander
    </Button>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
