import { Container } from '@/components/common/container'
import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pt-28 pb-20 sm:pt-32'>
      <Container className='max-w-6xl'>
        <header className='mb-10 space-y-3 sm:mb-12'>
          <p className='text-muted-foreground text-xs font-medium tracking-widest uppercase'>
            Selected work
          </p>
          <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
            Projects
          </h1>
          <p className='text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base'>
            Personal projects and collaborations.
          </p>
        </header>

        <Projects projects={projects} />
      </Container>
    </section>
  )
}
