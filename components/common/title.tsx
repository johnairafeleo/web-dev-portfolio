import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

export const titleVariants = cva('mx-auto', {
  variants: {
    variant: {
      default:
        'decoration-muted-foreground mb-8 text-2xl font-semibold underline decoration-1 underline-offset-8',
      sub: 'text-lg font-semibold',
      landing: 'md:px-20 py-5 ',
      employer: 'p-5 '
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof titleVariants> & {
    asChild?: boolean
  }

export const Title = forwardRef<HTMLDivElement, ContainerProps>(
  ({ asChild, className, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(titleVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Title.displayName = 'Title'

// sample usage
{
  /* <Container variant="employer"> */
}
