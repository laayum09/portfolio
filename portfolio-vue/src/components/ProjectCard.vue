<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="block rounded-2xl bg-[#0f0f10] border border-zinc-800/70 p-6 transition-all duration-300 hover:bg-[#161617] focus:outline-none focus:ring-2 focus:ring-zinc-700 cursor-pointer"
  >
    <h3 class="text-lg font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-zinc-400 leading-relaxed mb-3">
      {{ description }}
    </p>
    <div class="text-zinc-500 text-sm">View on GitHub →</div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
}>()
</script>
