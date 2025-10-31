<template>
  <div
    class="relative group flex flex-col items-center"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <img
      :src="src"
      :alt="name"
      class="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
    />

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="show"
        class="absolute bottom-16 w-56 bg-[#0f0f10] border border-zinc-800/70 rounded-2xl p-4 shadow-lg text-left"
      >
        <div class="text-white font-medium text-sm mb-1">{{ name }}</div>
        <div class="text-zinc-400 text-sm leading-snug">{{ description }}</div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  name: string
  src: string
  description: string
}>()

const show = ref(false)
</script>
