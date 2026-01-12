import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Code, MousePointerClick } from 'lucide-react'

export default function Intro() {
  return (
    <section className='relative flex min-h-[85vh] flex-col items-start justify-center overflow-hidden bg-white pb-24 text-black md:pb-32 dark:bg-black dark:text-white'>
      {/* Animated background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-black/10 blur-3xl dark:bg-white/10' />
        <div className='absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-black/10 blur-3xl dark:bg-white/10' />
      </div>

      <div className='relative flex flex-col gap-8'>
        {/* Heading */}
        <div className='space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 dark:border-white/10'>
            <Sparkles className='h-4 w-4' />
            <span className='text-sm font-medium'>Hello there!</span>
          </div>

          <div className='space-y-3'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
              <span className='block text-black/70 dark:text-white/70'>
                I&apos;m
              </span>

              <span className='relative inline-block'>
                <span className='relative z-10'>John Aira Feleo</span>
                <span className='absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 bg-black transition-transform duration-500 group-hover:scale-x-100 dark:bg-white' />
              </span>
            </h1>

            {/* Role */}
            <div className='group flex items-center gap-3'>
              <Code className='h-6 w-6 transition-transform duration-300 group-hover:rotate-12' />
              <p className='text-xl font-medium md:text-2xl'>
                Web Developer
                <span className='ml-2 inline-block animate-bounce'>🚀</span>
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='space-y-6'>
          <div className='group flex items-start gap-4'>
            <div className='mt-1 rounded-lg border border-black/10 p-2 transition-transform duration-300 group-hover:scale-110 dark:border-white/10'>
              <MousePointerClick className='h-5 w-5' />
            </div>
            <p className='max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70'>
              Crafting <span className='font-semibold'>fast</span>,{' '}
              <span className='font-semibold'>clean</span>, and{' '}
              <span className='font-semibold'>modern</span> digital experiences
              from the heart of the Philippines.
            </p>
          </div>

          <div className='group flex items-start gap-4'>
            <div className='mt-1 rounded-lg border border-black/10 p-2 transition-transform duration-300 group-hover:scale-110 dark:border-white/10'>
              <Sparkles className='h-5 w-5' />
            </div>
            <p className='max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70'>
              Turning complex ideas into{' '}
              <span className='relative font-semibold'>
                <span className='relative z-10'>intuitive</span>
                <span className='absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100 dark:bg-white' />
              </span>{' '}
              and{' '}
              <span className='relative font-semibold'>
                <span className='relative z-10'>delightful</span>
                <span className='absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100 dark:bg-white' />
              </span>{' '}
              user experiences.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className='flex flex-wrap gap-4 pt-8'>
          <Button
            asChild
            size='lg'
            className='group/btn bg-black text-white transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-white dark:text-black'
          >
            <Link href='/projects' className='flex items-center gap-2'>
              <span>Explore My Work</span>
              <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
            </Link>
          </Button>

          <Button
            asChild
            variant='outline'
            size='lg'
            className='group/btn border-black transition-all duration-300 hover:scale-105 dark:border-white'
          >
            <Link href='/contact' className='flex items-center gap-2'>
              <span>Let&apos;s Connect</span>
              <Sparkles className='h-4 w-4 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100' />
            </Link>
          </Button>
        </div>

        {/* Stats */}
        {/* <div className='mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4'>
          {[
            ['2+', 'Years Experience'],
            ['50+', 'Projects Built'],
            ['100%', 'Client Satisfaction'],
            ['∞', 'Creative Ideas']
          ].map(([value, label]) => (
            <div
              key={label}
              className='rounded-xl border border-black/10 p-4 transition-all duration-300 hover:scale-105 dark:border-white/10'
            >
              <div className='text-2xl font-bold'>{value}</div>
              <div className='text-sm text-black/60 dark:text-white/60'>
                {label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
