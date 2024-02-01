<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/self";
import { Button } from "@ui/button/self";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui/hover-card/self";
</script>

<template>
  <Story title="Components/Hover Card">
    <template #controls></template>

    <HoverCard>
      <HoverCardTrigger as-child>
        <Button variant="link"> @vuejs </Button>
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vuejs.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@vuejs</h4>
            <p class="text-sm">
              Progressive JavaScript framework for building modern web
              interfaces.
            </p>
            <div class="flex items-center pt-2">
              <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
              <span class="text-xs text-muted-foreground">
                Joined January 2014
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
