<script setup lang="ts">
import { cn } from "@utils/utils";
</script>

<template>
  <!--
    Implementation taken from
    https://youtu.be/12RcZmzCm9c
  -->
  <div class="flex items-center">
    <input
      type="checkbox"
      name=""
      id="nodejs"
      :class="
        cn(
          'appearance-none border border-primary mr-2 relative rounded size-4',
          'after:bg-[hsl(var(--primary-foreground))] before:bg-[hsl(var(--primary-foreground))]',
          'checked:bg-primary transition cursor-pointer',
        )
      "
    />
    <slot />
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  container-type: size;
}

input[type="checkbox"]::before {
  border-radius: 1992rem;
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  /* background-color: white; */
  transform: translate(36cqb, 70cqb) rotate(-45deg);
  transform-origin: left;
  transition: 50ms all linear;
  transition-delay: 25ms;
}

input[type="checkbox"]::after {
  border-radius: 1992rem;
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  /* background-color: white; */
  transform: translate(14cqb, 36cqb) rotate(45deg);
  transform-origin: left;
  transition: 50ms all linear;
  transition-delay: 150ms;
}

input[type="checkbox"]:checked::before {
  width: 80cqb;
  transition-delay: 100ms;
}

input[type="checkbox"]:checked::after {
  width: 50cqb;
  transition-delay: 25ms;
}
</style>
