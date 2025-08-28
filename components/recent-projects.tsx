import Link from 'next/link'

import { getProjects } from '@/lib/projects'
import Projects from './projects'
import { Title } from './common/title'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <div>
        <Title>Recent projects</Title>

        <Projects projects={projects} />

        <Link
          href='/projects'
          className='text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
