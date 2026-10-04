export type SkillGroup = {
  title: string
  items: string[]
}

export type ProjectStatus = 'in-progress' | 'research' | 'completed'

export type Project = {
  title: string
  description: string
  tags: string[]
  status: ProjectStatus
  link?: string,
  linkLabel?: string
}

export const skills: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', items: ['PHP', 'Laravel', 'REST APIs', 'Node.js'] },
  { title: 'Databases', items: ['MySQL', 'SQL', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Vite', 'AWS'] },
]


export const projects: Project[] = [
  {
    title: 'News Platform',
    description:
      'A full stack news site. A Laravel (PHP) backend exposes REST APIs for articles, categories and navigation on a relational MySQL data model, following the MVC pattern. A responsive, mobile-first React frontend built from reusable components consumes the API to deliver dynamic content.',
    tags: ['React', 'PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    status: 'completed',
    // TODO: replace with the News Platform repo URL once it's public
    link: 'https://github.com/HussainJuned',
    linkLabel: 'GitHub repo',
  },
  {
    title: 'M.Sc. Thesis: React vs Vue vs Svelte',
    description:
      'Designed controlled experiments to benchmark rendering performance of three frontend frameworks under real-time, high-volume data, then analysed and defended the results at Stockholm University.',
    tags: ['React', 'Vue', 'Svelte', 'Performance testing'],
    status: 'research',
  },
]