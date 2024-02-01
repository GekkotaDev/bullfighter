<script setup lang="ts">
import { ref } from "vue";
import { cn } from "@utils/utils";
import { Slider, SliderThumb } from "@ui/slider/self";

const thumbCount = ref(1);
const thumbs = computed({
  get() {
    return thumbCount.value;
  },

  set(value) {
    if (value < 1) return;

    thumbCount.value = value;
  },
});

const modelValue = ref([]);
</script>

<template>
  <Story title="Components/Slider">
    <template #controls></template>

    <div class="p-2">
      <button @click="() => thumbs--">-</button>
      <button @click="() => thumbs++">+</button>

      <p>{{ modelValue }}</p>

      <Slider
        v-model="modelValue"
        :max="100"
        :step="1"
        :class="cn('w-[50%]', $attrs.class ?? '')"
      >
        <SliderThumb />
        <SliderThumb />
        <SliderThumb />
      </Slider>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
