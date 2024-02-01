<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "radix-vue";
import { useForwardPropsEmits } from "radix-vue";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@ui/select/self";

import { ScrollArea } from "@ui/scroll-area/self";

const props = withDefaults(
  defineProps<
    Partial<{
      height: string;
      width: string;
      select: SelectRootProps;
      class: {
        trigger: string;
        area: string;
      };
    }> & {
      placeholder: string;
    }
  >(),
  {
    height: "h-80",
    width: "w-64",
  },
);

const selectEmits = defineEmits<SelectRootEmits>();

const selectForwarded = useForwardPropsEmits(props.select ?? {}, selectEmits);
</script>

<template>
  <Select v-bind="selectForwarded">
    <SelectTrigger :class="`${width} ${$props?.class?.trigger}`">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <ScrollArea :class="`${height} ${$props?.class?.area}`">
        <SelectGroup>
          <slot />
        </SelectGroup>
      </ScrollArea>
    </SelectContent>
  </Select>
</template>
