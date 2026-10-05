import { ThemeToggleButton } from './ThemeToggleButton'

/** Section links; each `href` must match a section `id` in App.tsx. */
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/** Sticky top bar with the site name, section links and theme toggle. */
export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <a href="#top" className="font-display text-xl font-bold">
          Juned<span className="text-accent">.</span>
        </a>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[15px] font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="py-2 text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <ThemeToggleButton />
        </ul>
      </nav>
    </header>
  )
}
