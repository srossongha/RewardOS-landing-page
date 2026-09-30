<script setup lang="ts">
const links = [
  { label: 'Solutions', to: '/#solutions' },
  // add more here
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-background">
    <nav class="flex h-16 items-center gap-6 px-6">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
