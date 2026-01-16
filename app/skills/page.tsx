import { Container } from '@/components/common/container'
import Skills from '@/components/skills'

export default function SkillsPage() {
  return (
    <section className='pt-40 pb-24'>
      <Container>
        <h1 className='title mb-12'>💻 Technical Skills</h1>

        <Skills />
      </Container>
    </section>
  )
}

