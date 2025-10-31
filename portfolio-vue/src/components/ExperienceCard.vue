<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="block rounded-2xl bg-[#0f0f10] border border-zinc-800/70 p-6 flex items-center justify-between transition-all duration-300 hover:bg-[#161617] focus:outline-none focus:ring-2 focus:ring-zinc-700"
  >
    <div class="flex items-center gap-4">
      <img :src="logo" alt="" class="h-12 w-12 rounded-xl object-cover" />
      <div>
        <div class="text-white">{{ role }}</div>
        <div class="text-zinc-400">{{ company }}</div>
      </div>
    </div>
    <div class="text-zinc-400 whitespace-nowrap text-sm">{{ start }} - {{ end }}</div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  role: string
  company: string
  start: string
  end: string
  logo: string
  link: string
}>()
</script>
