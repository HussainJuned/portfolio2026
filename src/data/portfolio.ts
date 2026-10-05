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

/** Personal details reused across the Hero, Contact and Footer sections. */
export const profile = {
  name: 'Amdad Hussain Juned',
  role: 'Junior Software Engineer',
  location: 'Lisbon area',
  intro:
    'I build full-stack web apps: React and TypeScript interfaces backed by REST APIs and SQL databases. I hold an M.Sc. in Computer and Systems Science from Stockholm University. Based near Lisbon and open to full-time developer roles.',
  email: 'hussainjuned99@gmail.com',
  githubUrl: 'https://github.com/HussainJuned',
  linkedinUrl: 'https://linkedin.com/in/hussain-juned',
  // Served from /public with a fixed name so the download link never changes.
  cvUrl: '/Amdad_Hussain_Juned_CV.pdf',
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
  }
]