<script setup lang="ts">
import type { Blog } from '@/types/Blog'

const { id, title, content = '' } = defineProps<{
  id: string,
  title: string,
  content?: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="`/blog/${id}`">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </NuxtLink>
  </li>
</template>
