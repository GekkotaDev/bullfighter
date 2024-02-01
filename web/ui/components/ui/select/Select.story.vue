<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui/select/self";

import { ScrollArea } from "@ui/scroll-area/self";
</script>

<template>
  <Story title="Components/Select">
    <template #controls></template>

    <!--
      TODO: Add a scrollbar to the <Select/> component.

      When presented with an absurdly large selection of items
    -->

    <div class="p-2">
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea class="h-96">
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              <!-- <SelectItem value="apple"> Apple </SelectItem>
            <SelectItem value="banana"> Banana </SelectItem>
            <SelectItem value="blueberry"> Blueberry </SelectItem>
            <SelectItem value="grapes"> Grapes </SelectItem>
            <SelectItem value="pineapple"> Pineapple </SelectItem> -->
              <SelectItem :value="`${year}`" v-for="year in 100">
                {{ year }}
              </SelectItem>
            </SelectGroup>
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
