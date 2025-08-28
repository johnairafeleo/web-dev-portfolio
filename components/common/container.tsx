import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

export const containerVariants = cva('mx-auto max-w-[1440px] sm:px-5 w-full', {
  variants: {
    variant: {
      default: 'container max-w-5xl px-5',
      hero: 'md:py-5 px-0 sm:px-20 flex flex-col items-center justify-center gap-5',
      landing: 'md:px-20 py-5 ',
      employer: 'p-5 '
      // default: ' md:px-20'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ asChild, className, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(containerVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = 'Container'

// sample usage
{
  /* <Container variant="employer"> */
}
