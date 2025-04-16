import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Container } from './common/container'

export default function Header() {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 flex flex-col items-center py-6 backdrop-blur-sm'>
      <Container>
        <nav className='flex items-center justify-between px-5'>
          <div>
            <Link href='/' className='font-serif text-2xl font-bold'>
              HB
            </Link>
          </div>

          <ul className='text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10'>
            <li className='hover:text-foreground transition-colors'>
              <Link href='/posts'>Posts</Link>
            </li>
            <li className='hover:text-foreground transition-colors'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='hover:text-foreground transition-colors'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>

          <div>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
