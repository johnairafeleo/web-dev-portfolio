import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { Container } from '@/components/common/container'
import { notFound } from 'next/navigation'

// Generate static paths for SSG
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

// Main post page component
export default async function Post({ params }: { params: { slug: string } }) {
  const parameter = await params
  const post = await getPostBySlug(parameter.slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pt-32 pb-24'>
      <Container>
        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || 'Post image'}
              className='object-cover'
              fill
              priority
            />
          </div>
        )}

        <header>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-xs'>
            {author ?? 'Unknown'} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-6'>
          <MDXContent source={content} />
        </main>

        {/* Optional: add a newsletter form or related posts */}
        {/* <footer className="mt-16">
          <NewsletterForm />
        </footer> */}
      </Container>
    </section>
  )
}
