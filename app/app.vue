<script setup lang="ts">
import Header from './components/layouts/Header.vue'
</script>

import { LandingSolution } from '../.nuxt/components'

<template>
  <div>
    <Header />
    <div>
      haha Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam facilis et expedita quos,
      perspiciatis at hic officiis! Rerum voluptatem autem dolorem cupiditate explicabo sunt quidem
      reiciendis. Nisi, distinctio? Hic, placeat!
    </div>
    <div class="flex min-h-screen items-center justify-center bg-slate-900">
      <h1 class="text-4xl font-bold text-white">Tailwind works</h1>
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <LandingSolution />
    </div>
  </div>
</template>
