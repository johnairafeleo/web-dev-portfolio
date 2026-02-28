import { Container } from '@/components/common/container'
import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='relative overflow-hidden pt-28 pb-20 sm:pt-32'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl dark:bg-white/10' />
        <div className='absolute top-60 right-[-6rem] h-80 w-80 rounded-full bg-white/5 blur-3xl dark:bg-white/10' />
        <div className='absolute bottom-10 left-[-8rem] h-96 w-96 rounded-full bg-white/5 blur-3xl dark:bg-white/10' />
      </div>

      <Container className='max-w-6xl'>
        <header className='mb-10 space-y-4 sm:mb-12'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Projects
            </h1>
            <p className='text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base'>
              Personal projects and collaborations.
            </p>
          </div>
        </header>

        <Projects projects={projects} />
      </Container>
    </section>
  )
}
