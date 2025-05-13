// components/mdx-content.tsx
import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import Counter from '@/components/counter'

type CodeProps = ComponentPropsWithoutRef<'code'> & {
  children: string | ReactNode
}

function Code({ children, ...props }: CodeProps) {
  const html = typeof children === 'string' ? highlight(children) : ''
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
