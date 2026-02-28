import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Terminal
} from 'lucide-react'

import type { CSSProperties } from 'react'

type OrbitingIconsProps = {
  className?: string
}

export default function OrbitingIcons({ className }: OrbitingIconsProps) {
  const outer = [
    { Icon: Globe, angle: 10, color: '#3b82f6' },
    { Icon: GitBranch, angle: 55, color: '#f97316' },
    { Icon: Layers, angle: 105, color: '#8b5cf6' },
    { Icon: Database, angle: 160, color: '#22c55e' },
    { Icon: Cpu, angle: 215, color: '#eab308' },
    { Icon: Braces, angle: 275, color: '#06b6d4' },
    { Icon: Terminal, angle: 325, color: '#ef4444' }
  ]

  const inner = [
    { Icon: Code2, angle: 20, color: '#6366f1' },
    { Icon: Braces, angle: 120, color: '#14b8a6' },
    { Icon: Terminal, angle: 220, color: '#fb7185' },
    { Icon: Cpu, angle: 310, color: '#a3e635' }
  ]

  return (
    <div className={className}>
      <div className='orbit-root'>
        <div className='orbit-center' />

        <div className='orbit-ring orbit-ring--outer'>
          {outer.map(({ Icon, angle, color }) => (
            <div
              key={`${Icon.displayName ?? Icon.name}-${angle}`}
              className='orbit-item'
              style={
                {
                  transform: `rotate(${angle}deg)`,
                  ['--orbit-color' as never]: color
                } as CSSProperties
              }
            >
              <div className='orbit-item-inner'>
                <Icon className='orbit-icon' />
              </div>
            </div>
          ))}
        </div>

        <div className='orbit-ring orbit-ring--inner orbit-ring--reverse'>
          {inner.map(({ Icon, angle, color }) => (
            <div
              key={`${Icon.displayName ?? Icon.name}-${angle}`}
              className='orbit-item'
              style={
                {
                  transform: `rotate(${angle}deg)`,
                  ['--orbit-color' as never]: color
                } as CSSProperties
              }
            >
              <div className='orbit-item-inner'>
                <Icon className='orbit-icon' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
