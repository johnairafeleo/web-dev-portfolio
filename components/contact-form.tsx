'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <section className='relative isolate'>
      {/* Background pattern */}
      <svg
        className='absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-zinc-200 opacity-75 dark:stroke-zinc-700'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-64}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg
          x='50%'
          y={-64}
          className='overflow-visible fill-zinc-50 dark:fill-zinc-900/75'
        >
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg>

      {/* Form */}
      <div className='relative mx-auto mt-14 w-full max-w-3xl px-4 sm:px-6 lg:px-8'>
        <div className='bg-card/40 ring-foreground/10 rounded-2xl p-6 shadow-sm ring-1 backdrop-blur-md sm:p-8'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight'>
              Let’s talk about your project
            </h2>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Send a message and I’ll get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='mt-8'
            noValidate
          >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6'>
              {/* Name */}
              <div>
                <Input
                  id='name'
                  type='text'
                  placeholder='Name'
                  autoComplete='given-name'
                  {...register('name')}
                />

                {errors.name?.message && (
                  <p className='mt-2 ml-1 text-sm text-rose-400'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Input
                  type='email'
                  id='email'
                  autoComplete='email'
                  placeholder='Email'
                  {...register('email')}
                />

                {errors.email?.message && (
                  <p className='mt-2 ml-1 text-sm text-rose-400'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className='sm:col-span-2'>
                <Textarea
                  rows={6}
                  placeholder='Message'
                  {...register('message')}
                />

                {errors.message?.message && (
                  <p className='mt-2 ml-1 text-sm text-rose-400'>
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <div className='mt-6'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
              >
                {isSubmitting ? 'Submitting...' : 'Send message'}
              </Button>
            </div>

            <p className='text-muted-foreground mt-4 text-xs'>
              By submitting this form, I agree to the{' '}
              <Link href='/privacy' className='font-bold'>
                privacy&nbsp;policy.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
