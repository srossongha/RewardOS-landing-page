<script setup lang="ts">
import Header from './components/layouts/Header.vue'
useSeoMeta({
  title: 'RewardOS',
  description: 'One or two sentences on what the product does.',
  ogTitle: 'RewardOS | your short tagline',
  ogDescription: 'Same as the description, or a shorter version.',
  ogType: 'website',
})
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
