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
              className='bg-card/40 text-card-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 ring-white/10 backdrop-blur-md transition-all outline-none hover:-translate-y-1 hover:shadow-lg hover:ring-white/20 focus-visible:ring-[3px]'
            >
              <div className='relative'>
                <div className='bg-muted relative aspect-[16/10] w-full overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]'
                      sizes='(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw'
                    />
                  ) : null}
                </div>

                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80' />
                <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <div className='absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl' />
                </div>
              </div>

              <div className='flex flex-1 flex-col p-5'>
                <div className='space-y-2'>
                  <h2 className='line-clamp-1 text-lg font-semibold tracking-tight'>
                    {project.title}
                  </h2>
                  <p className='text-muted-foreground line-clamp-2 text-sm leading-relaxed'>
                    {project.summary}
                  </p>
                </div>

                <div className='mt-auto pt-5'>
                  <div className='flex items-center justify-between gap-3'>
                    {project.publishedAt ? (
                      <p className='text-muted-foreground text-xs'>
                        {formatDate(project.publishedAt)}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className='bg-primary/10 text-primary ring-primary/20 group-hover:bg-primary/15 inline-flex h-9 items-center rounded-full px-4 text-xs font-medium ring-1 transition-colors'>
                      Visit site
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className='bg-card/40 text-card-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 ring-white/10 backdrop-blur-md transition-all outline-none hover:-translate-y-1 hover:shadow-lg hover:ring-white/20 focus-visible:ring-[3px]'
            >
              <div className='relative'>
                <div className='bg-muted relative aspect-[16/10] w-full overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]'
                      sizes='(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw'
                    />
                  ) : null}
                </div>

                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80' />
                <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <div className='absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl' />
                </div>
              </div>

              <div className='flex flex-1 flex-col p-5'>
                <div className='space-y-2'>
                  <h2 className='line-clamp-1 text-lg font-semibold tracking-tight'>
                    {project.title}
                  </h2>
                  <p className='text-muted-foreground line-clamp-2 text-sm leading-relaxed'>
                    {project.summary}
                  </p>
                </div>

                <div className='mt-auto pt-5'>
                  <div className='flex items-center justify-between gap-3'>
                    {project.publishedAt ? (
                      <p className='text-muted-foreground text-xs'>
                        {formatDate(project.publishedAt)}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className='bg-secondary/30 text-secondary-foreground group-hover:bg-secondary/40 inline-flex h-9 items-center rounded-full px-4 text-xs font-medium ring-1 ring-white/10 transition-colors'>
                      View details
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
