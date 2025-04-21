import { Container } from '@/components/common/container'
import Intro from '@/components/intro'
import React from 'react'

export default function Page() {
  return (
    <div className='py-24'>
      <Container>
        <Intro />
      </Container>
    </div>
  )
}
