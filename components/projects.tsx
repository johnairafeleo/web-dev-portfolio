import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
      {projects.map(project => (
        <li key={project.slug} className='group h-full'>
          {project.url ? (
            <a
              href={project.url}
              target='_blank'
              rel='noreferrer'
              className='bg-card text-card-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all outline-none hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-[3px]'
            >
              <div className='relative'>
                <div className='bg-muted relative aspect-[16/10] w-full overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
                      sizes='(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw'
                    />
                  ) : null}
                </div>

                <div className='from-background/0 via-background/20 to-background/90 pointer-events-none absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              </div>

              <div className='flex-1'>
                <div className='space-y-3 p-5'>
                  <div className='space-y-1'>
                    <h2 className='line-clamp-1 text-lg font-semibold tracking-tight'>
                      {project.title}
                    </h2>
                    <p className='text-muted-foreground line-clamp-2 text-sm'>
                      {project.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-auto flex items-center justify-between gap-3 p-5'>
                {project.publishedAt ? (
                  <p className='text-muted-foreground text-xs'>
                    {formatDate(project.publishedAt)}
                  </p>
                ) : (
                  <span />
                )}

                <span className='bg-primary text-primary-foreground group-hover:bg-primary/90 inline-flex h-8 items-center rounded-md px-3 text-xs font-medium transition-colors'>
                  Visit site
                </span>
              </div>
            </a>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className='bg-card text-card-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all outline-none hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-[3px]'
            >
              <div className='relative'>
                <div className='bg-muted relative aspect-[16/10] w-full overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
                      sizes='(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw'
                    />
                  ) : null}
                </div>

                <div className='from-background/0 via-background/20 to-background/90 pointer-events-none absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              </div>

              <div className='flex-1'>
                <div className='space-y-3 p-5'>
                  <div className='space-y-1'>
                    <h2 className='line-clamp-1 text-lg font-semibold tracking-tight'>
                      {project.title}
                    </h2>
                    <p className='text-muted-foreground line-clamp-2 min-h-[2.5rem] text-sm'>
                      {project.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-auto flex items-center justify-between gap-3 p-5'>
                {project.publishedAt ? (
                  <p className='text-muted-foreground text-xs'>
                    {formatDate(project.publishedAt)}
                  </p>
                ) : (
                  <span />
                )}

                <span className='bg-secondary text-secondary-foreground group-hover:bg-secondary/80 inline-flex h-8 items-center rounded-md px-3 text-xs font-medium transition-colors'>
                  View details
                </span>
              </div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
