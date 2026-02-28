import { Code, Database, Zap, Settings, Palette, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Palette,
    skills: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'Responsive Web Design (Mobile-First)',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Shadcn/UI',
      'Lucide / Icon libraries'
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'REST API development & integration',
      'PostgreSQL',
      'TypeORM (entity modeling & database relationships)'
    ]
  },
  {
    title: 'API & Testing Tools',
    icon: Zap,
    skills: ['Postman (API testing, collections, environment variables)']
  },
  {
    title: 'CMS & Platforms',
    icon: Globe,
    skills: [
      'WordPress (theme customization, basic plugins)',
      'Headless CMS integration (basic experience)'
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: Settings,
    skills: [
      'Git & GitHub (version control)',
      'VS Code',
      'ESLint & Prettier',
      'npm / yarn',
      'Vercel (deployment)'
    ]
  }
]

export default function Skills() {
  return (
    <div className='space-y-12'>
      {skillCategories.map((category, index) => {
        const Icon = category.icon
        return (
          <div
            key={index}
            className='group rounded-xl border border-black/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-white/10'
          >
            <div className='mb-6 flex items-center gap-3'>
              <div className='rounded-lg border border-black/10 p-2 transition-transform duration-300 group-hover:scale-110 dark:border-white/10'>
                <Icon className='h-5 w-5' />
              </div>
              <h3 className='text-xl font-semibold'>{category.title}</h3>
            </div>
            <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className='flex items-center gap-2 text-black/70 dark:text-white/70'
                >
                  <span className='h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20' />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

