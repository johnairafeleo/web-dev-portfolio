import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
  metadata: PostMetadata
  content: string
}
export type PostMetadata = {
  title: string
  summary: string
  image: string
  author: string
  publishedAt: string
}

export const getPostBySlug = async (slug: string) => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { content, data } = matter(fileContents)

    return {
      metadata: {
        slug,
        ...data
      },
      content
    }
  } catch (error) {
    console.error('Failed to get post:', error)
    return null
  }
}
