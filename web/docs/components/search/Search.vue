<script setup lang="ts">
import hotkey from "hotkeys-js";

let open = $ref(false);

hotkey("ctrl+k", (event) => {
  event.preventDefault();
  open = true;
});

hotkey("esc", (event) => {
  event.preventDefault();
  open = false;
});
</script>

<template>
  <UiDialog v-model:open="open">
    <UiDialogTrigger>
      <UiButton
        variant="outline"
        size="sm"
        :ripple="false"
        class="select-none gap-x-1"
      >
        <Icon name="material-symbols:search-rounded" class="size-5" />
        <slot />
        <div class="w-10 rounded border border-border bg-secondary p-1">
          Ctrl K
        </div>
      </UiButton>
    </UiDialogTrigger>
    <UiDialogContent no-close-icon class="p-0">
      <UiCommand class="border">
        <UiCommandInput placeholder="Type a command or search" />
        <UiCommandList>
          <UiCommandEmpty>No results found.</UiCommandEmpty>
        </UiCommandList>
      </UiCommand>
    </UiDialogContent>
  </UiDialog>
</template>
