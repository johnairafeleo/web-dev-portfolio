import Link from 'next/link'
import Image from 'next/image'

import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { Container } from '@/components/common/container'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({ slug: project.slug }))
}

export default async function Project({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // ✅ Await params before using it
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, imageFit, imagePosition, imageLayout } = metadata

  const layout = imageLayout ?? 'top'
  const isContain = imageFit === 'contain'
  const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover'
  const positionClass =
    imagePosition === 'bottom'
      ? 'object-bottom'
      : imagePosition === 'center'
        ? 'object-center'
        : 'object-top'

  return (
    <section className='pt-32 pb-24'>
      <Container>
        <Link
          href='/projects'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {layout === 'side' ? (
          <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start'>
            <div>
              <header>
                <h1 className='text-3xl leading-tight font-semibold tracking-tight sm:text-4xl'>
                  {title}
                </h1>
              </header>

              <main className='prose dark:prose-invert mt-10'>
                <MDXContent source={content} />
              </main>
            </div>

            {image ? (
              <div
                className={`relative mx-auto w-full max-w-[360px] overflow-hidden rounded-lg ${
                  isContain ? 'bg-card/40' : ''
                } aspect-[9/16] lg:mt-1`}
              >
                <Image
                  src={image}
                  alt={title || ''}
                  className={`${fitClass} ${isContain ? 'object-center' : positionClass}`}
                  fill
                />
              </div>
            ) : null}
          </div>
        ) : (
          <>
            {image && (
              <div
                className={`relative mb-8 h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-96 ${
                  isContain ? 'bg-card/40' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={title || ''}
                  className={`${fitClass} ${isContain ? 'object-center' : positionClass}`}
                  fill
                />
              </div>
            )}

            <header>
              <h1 className='text-3xl leading-tight font-semibold tracking-tight sm:text-4xl'>
                {title}
              </h1>
            </header>

            <main className='prose dark:prose-invert mt-10'>
              <MDXContent source={content} />
            </main>
          </>
        )}
      </Container>
    </section>
  )
}
