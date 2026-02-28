'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { Container } from './common/container'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className='bg-background/80 border-border/70 hover:bg-background/90 fixed inset-x-0 top-0 z-50 flex flex-col items-center border-b py-4 backdrop-blur-md transition-all duration-300'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='group relative'>
            <Link
              href='/'
              className='relative font-serif text-xl font-bold transition-all duration-300 hover:scale-105 sm:text-2xl'
            >
              <span className='from-foreground via-foreground/80 to-foreground group-hover:from-foreground/90 group-hover:via-foreground group-hover:to-foreground/90 relative z-10 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500'>
                John Aira
              </span>
              <span className='from-foreground/50 via-foreground/30 to-foreground/50 absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30'>
                John Aira
              </span>
            </Link>
          </div>

          <ul className='text-muted-foreground hidden items-center gap-4 text-sm font-medium sm:flex sm:gap-8'>
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname === href || pathname.startsWith(`${href}/`)
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

          <div className='relative flex items-center gap-2'>
            <ThemeToggle />

            <button
              type='button'
              className='hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-9 items-center justify-center rounded-md transition-all outline-none focus-visible:ring-[3px] sm:hidden'
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls='mobile-nav'
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </nav>

        <div
          id='mobile-nav'
          className={cn(
            'border-border/70 bg-background/90 mt-3 overflow-hidden rounded-xl border backdrop-blur-md sm:hidden',
            mobileOpen ? 'block' : 'hidden'
          )}
        >
          <ul className='flex flex-col p-2'>
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname === href || pathname.startsWith(`${href}/`)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'hover:bg-accent hover:text-accent-foreground block rounded-lg px-3 py-2 text-sm transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </header>
  )
}
