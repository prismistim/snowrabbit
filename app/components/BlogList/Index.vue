<script setup lang="ts">
import type { Blog } from '@/types/Blog'
import type { MicroCMSListResponse } from 'microcms-js-sdk'

const { data } = useFetch<MicroCMSListResponse<Blog>>('/api/blogs')
</script>

<template>
  <BlogListItem
    v-for="item of data?.contents"
    :id="item.id"
    :key="item.id"
    :title="item.title"
    :content="item.content"
  />
</template>