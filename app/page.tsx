import { Container } from '@/components/common/container'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='py-24'>
      <Container>
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </Container>
    </section>
  )
}
