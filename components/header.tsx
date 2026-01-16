'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { Container } from './common/container'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='bg-background/80 border-border/70 hover:bg-background/90 fixed inset-x-0 top-0 z-50 flex flex-col items-center border-b py-4 backdrop-blur-md transition-all duration-300'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='group relative'>
            <Link
              href='/'
              className='relative font-serif text-2xl font-bold transition-all duration-300 hover:scale-105'
            >
              <span className='from-foreground via-foreground/80 to-foreground group-hover:from-foreground/90 group-hover:via-foreground group-hover:to-foreground/90 relative z-10 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500'>
                John Aira
              </span>
              <span className='from-foreground/50 via-foreground/30 to-foreground/50 absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30'>
                John Aira
              </span>
            </Link>
          </div>

          <ul className='text-muted-foreground flex items-center gap-4 text-sm font-medium sm:gap-8'>
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'group relative px-2 py-1 transition-all duration-300',
                      isActive ? 'text-foreground' : 'hover:text-foreground'
                    )}
                  >
                    <span className='relative z-10'>{label}</span>
                    <span
                      className={cn(
                        'bg-foreground absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full',
                        isActive && 'w-full'
                      )}
                    />
                    <span className='bg-foreground/5 absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className='relative'>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
