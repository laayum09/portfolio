<template>
  <h2 class="text-xl font-semibold tracking-tight mb-4">{{ title }}</h2>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>
