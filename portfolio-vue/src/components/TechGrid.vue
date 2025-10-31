<template>
  <div class="rounded-2xl bg-[#0f0f10] border border-zinc-800/70 p-8">
    <div class="grid grid-cols-6 gap-10 place-items-center">
      <TechItem
        v-for="t in tech"
        :key="t.id"
        :name="t.name"
        :src="t.src"
        :description="t.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechIcon } from "../types"
import TechItem from "./TechItem.vue"
defineProps<{ tech: TechIcon[] }>()
</script>
