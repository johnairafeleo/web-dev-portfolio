import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Intro() {
  return (
    <section className='flex flex-col items-start gap-8 pb-24 md:pb-32'>
      <div className='flex flex-col gap-6'>
        {/* Heading */}
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
            Hi, I&apos;m{' '}
            <span className='text-primary decoration-primary/60 underline decoration-2 underline-offset-8'>
              John Aira Feleo
            </span>
          </h1>

          {/* Role line */}
          <p className='text-primary/80 text-lg font-medium'>
            Web Developer • Next.js • Modern Web Applications
          </p>
        </div>

        {/* Description */}
        <div className='space-y-4'>
          <p className='text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg'>
            I&apos;m a web developer based in the Philippines, focused on
            building fast, modern, and user-friendly web applications.
          </p>

          <p className='text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg'>
            I enjoy turning ideas into clean, scalable digital experiences using
            technologies like Next.js — always learning and improving my craft.
          </p>
        </div>

        {/* CTA */}
        <div className='flex flex-wrap gap-4 pt-4'>
          <Button asChild size='lg'>
            <Link href='/projects'>View Projects</Link>
          </Button>
          <Button asChild variant='outline' size='lg'>
            <Link href='/contact'>Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
