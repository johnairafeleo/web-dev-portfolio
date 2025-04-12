'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { SunIcon, MoonIcon } from 'lucide-react'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-300' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
