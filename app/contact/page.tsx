import { Container } from '@/components/common/container'
import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pt-40 pb-24'>
      <Container>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </Container>
    </section>
  )
}
