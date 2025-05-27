import { getPosts } from '@/lib/posts'
import { Container } from '@/components/common/container'
import PostsWithSearch from '@/components/posts-with-search'
export default async function PostsPage() {
  const posts = await getPosts()
  return (
    <section className='pt-40 pb-24'>
      <Container>
        <h1 className='title mb-12'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </Container>
    </section>
  )
}
