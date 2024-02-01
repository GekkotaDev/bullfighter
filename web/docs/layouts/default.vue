<script setup lang="ts">
import "@fontsource/firago";
import "@fontsource-variable/inter-tight";
</script>

<template>
  <div>
    <NavigationHeader>
      <template #icon>
        <Icon name="material-symbols:10k" class="size-10" />
      </template>

      <NuxtLink href="docs/v1">
        <p class="select-none">Docs</p>
      </NuxtLink>

      <NuxtLink href="blog">
        <p class="select-none">Blog</p>
      </NuxtLink>

      <template #socials>
        <Icon name="mdi:github" class="size-6" />
        <Icon name="mdi:mastodon" class="size-6" />
        <Icon name="mdi:butterfly" class="size-6" />
      </template>
    </NavigationHeader>
    <slot />
  </div>
</template>
