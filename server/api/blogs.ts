import type { Blog } from '@/types/Blog'
import { createClient } from 'microcms-js-sdk'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const client = createClient({
    serviceDomain: config.serviceDomain,
    apiKey: config.apiKey
  })

  const blogs = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: { fields: ['id', 'title'] }
  })

  return blogs
})
