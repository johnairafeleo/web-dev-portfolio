import { Container } from '@/components/common/container'
import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `
# this is a markdown heading
`
  return (
    <section className='py-24'>
      <Container>
        <Intro />
        <MDXRemote source={content} />
      </Container>
    </section>
  )
}
