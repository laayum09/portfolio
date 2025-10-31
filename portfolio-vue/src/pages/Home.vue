<template>
  <main class="max-w-3xl mx-auto px-5 py-16 md:py-20">
    <header class="mb-16">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-semibold tracking-tight">laayum</h1>
          <div class="text-zinc-400">Fullstack Developer</div>
        </div>
        <div class="text-zinc-400 flex items-center gap-2">
          <span>📍</span>
          <span>Vienna, AT</span>
        </div>
      </div>
      <p class="mt-8 text-zinc-300 leading-relaxed max-w-lg">
        I am a full-stack developer with experience in numerous programming languages and frameworks.
      </p>
    </header>

    <!-- PROJECTS -->
    <section class="mt-20">
      <SectionTitle title="Projects" />
      <div class="mt-4 space-y-5">
        <ProjectCard
          title="Production-Ready NestJS Template"
          description="A preconfigured, scalable NestJS backend template with TypeScript, environment validation, and production-ready structure."
          link="https://github.com/laayum09/nestjs-template"
        />
        <ProjectCard
          title="Live Voting Platform"
          description="A real-time web voting system built with modern backend and frontend technologies, enabling interactive participation."
          link="https://github.com/laayum09/Live-Voting-Platform"
        />
        <ProjectCard
          title="Roblox Projects Showcase"
          description="Explore my Roblox scripting and development work — custom UIs, frameworks, and gameplay mechanics built with Luau."
          link="/roblox"
        />
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="mt-20">
      <SectionTitle title="Experience" />
      <div class="mt-4 space-y-5">
        <ExperienceCard
          role="Product Developer"
          company="Broken Studios"
          start="August 2024"
          end="November 2024"
          :logo="logos.broken"
          link="https://discord.gg/qEbsznFUeW"
        />
        <ExperienceCard
          role="Backend/ Product Developer"
          company="MiaTech"
          start="April 2025"
          end="June 2025"
          :logo="logos.mia"
          link="https://discord.gg/qEbsznFUeW"
        />
        <ExperienceCard
          role="Backend Developer"
          company="simstore"
          start="January 2024"
          end="February 2025"
          :logo="logos.sim"
          link="https://discord.gg/simstore"
        />
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="mt-24">
      <SectionTitle title="Tech Stack" />
      <div class="mt-6">
        <TechGrid :tech="tech" />
      </div>
    </section>

    <!-- CONTACT -->
    <section class="mt-24">
      <SectionTitle title="Contact" />
      <p class="mt-3 text-zinc-400 text-sm leading-relaxed max-w-lg">
        Please contact me via Discord if you are interested in working with me.
      </p>
      <div class="mt-6">
        <ContactButtons />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import SectionTitle from "../components/SectionTitle.vue"
import ExperienceCard from "../components/ExperienceCard.vue"
import TechGrid from "../components/TechGrid.vue"
import ProjectCard from "../components/ProjectCard.vue"
import ContactButtons from "../components/ContactButtons.vue"
import type { TechIcon } from "../types"

const logos = {
  broken: "/src/assets/logos/brokenstudios.webp",
  mia: "/src/assets/logos/miatech.webp",
  sim: "/src/assets/logos/simstore.webp"
}

const tech: TechIcon[] = [
  {
    id: "ts",
    name: "TypeScript",
    src: "/src/assets/logos/ts.webp",
    description: "A typed superset of JavaScript that compiles to plain JS."
  },
  {
    id: "js",
    name: "JavaScript",
    src: "/src/assets/logos/js.png",
    description: "The core language of the web for building interactive experiences."
  },
  {
    id: "html",
    name: "HTML5",
    src: "/src/assets/logos/html5.png",
    description: "The standard markup language for building web page structure."
  },
  {
    id: "css",
    name: "CSS3",
    src: "/src/assets/logos/css3.svg",
    description: "A stylesheet language used to style and layout web pages."
  },
  {
    id: "adonis",
    name: "AdonisJS",
    src: "/src/assets/logos/appwrite.png",
    description: "A fully featured Node.js web framework for building scalable server-side apps."
  },
  {
    id: "nestjs",
    name: "NestJS",
    src: "/src/assets/logos/nestjs.png",
    description: "A progressive Node.js framework for efficient and scalable server-side applications."
  },
  {
    id: "luau",
    name: "Luau",
    src: "/src/assets/logos/luau.png",
    description: "A fast, typed scripting language derived from Lua, used for developing on Roblox."
  },
  {
    id: "mongo",
    name: "MongoDB",
    src: "/src/assets/logos/mongodb.svg",
    description: "A NoSQL database using JSON-like documents for flexible data storage."
  },
  {
    id: "react",
    name: "React",
    src: "/src/assets/logos/react.png",
    description: "A frontend library for building user interfaces with reusable components."
  },
  {
    id: "vue",
    name: "Vue",
    src: "/src/assets/logos/vue.png",
    description: "A progressive JavaScript framework for building modern user interfaces."
  },
  {
    id: "aws",
    name: "AWS",
    src: "/src/assets/logos/aws.png",
    description: "Amazon Web Services — cloud infrastructure for deployment and scaling."
  },
  {
    id: "djs",
    name: "DiscordJS",
    src: "/src/assets/logos/djs.png",
    description: "A library for building powerful Discord bots with Node.js."
  }
]
</script>

<style scoped></style>
