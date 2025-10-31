<template>
  <main class="max-w-4xl mx-auto px-5 py-16 md:py-20">
    <header class="mb-12">
      <h1 class="text-3xl font-semibold tracking-tight mb-2">Roblox Projects</h1>
      <p class="text-zinc-400 max-w-2xl">
        A showcase of some of my Roblox scripting and development work, using Luau and Roblox Studio.
      </p>
    </header>

    <section class="space-y-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="rounded-2xl bg-[#0f0f10] border border-zinc-800/70 p-6 flex flex-col gap-4"
      >
        <h2 class="text-xl font-semibold text-white">{{ project.title }}</h2>
        <p class="text-zinc-400 text-sm">{{ project.description }}</p>
        <div class="aspect-video rounded-xl overflow-hidden border border-zinc-800/70">
          <iframe
            class="w-full h-full"
            :src="project.video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <div class="mt-16">
      <router-link
        to="/"
        class="px-5 py-2.5 rounded-full bg-[#1a1a1c] text-zinc-300 text-sm font-medium transition-all duration-200 hover:bg-[#232325] hover:text-white"
      >
        ← Back to Home
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
interface RobloxProject {
  id: number
  title: string
  description: string
  video: string
}

const projects: RobloxProject[] = [
  {
    id: 1,
    title: "Realistic Night Vision Goggles",
    description: "A realistic night vision goggle UI that acts as if real world factors counted.",
    video: "https://www.youtube.com/embed/SGebOdO4qnI"
  },
  {
    id: 2,
    title: "Team Changer UI",
    description: "A modern and functional team changer UI, with sound effects and a modern feel.",
    video: "https://www.youtube.com/embed/4_f3SA2Qu6g"
  },
  {
    id: 3,
    title: "Responsive Money UI",
    description: "A responsive money UI that changes and updates when money has been subtracted or added to your account.",
    video: "https://www.youtube.com/embed/M6VWQ5R43JQ"
  }
]
</script>
