import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'
import { Title } from './common/title'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-9'>
      <div>
        <Title>Recent posts</Title>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}
