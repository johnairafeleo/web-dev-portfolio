import { Container } from '@/components/common/container'
import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pt-40 pb-24'>
      <Container>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </Container>
    </section>
  )
}
