<script setup lang="ts">
type AnimationState =
  | "animate-none"
  | "animate-ripple-grow"
  | "animate-ripple-fade";

const props = withDefaults(
  defineProps<{
    show?: boolean;
    x: number | string;
    y: number | string;
  }>(),
  {
    show: false,
  },
);
const show = toRef(() => props.show);
const wait = ref(false);

const animation = ref<AnimationState>("animate-none");

watch([show, wait], () => {
  if (show.value) {
    animation.value = "animate-none";
    animation.value = "animate-ripple-grow";
    wait.value = false;
    return;
  }

  //   if (wait.value) {
  //     animation.value = "animate-none";
  //     animation.value = "animate-ripple-grow";
  //     return;
  //   }

  if (wait.value === false) {
    animation.value = "animate-ripple-fade";
    return;
  }

  animation.value = "animate-none";
});
</script>

<template>
  <div
    aria-hidden
    @animationend="(event: AnimationEvent) => event.animationName === ''"
    :class="`absolute bg-black/20 rounded-full scale-0 size-full
    ${animation}`"
  ></div>
</template>
