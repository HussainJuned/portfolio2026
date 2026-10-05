import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import Photo from '../assests/photo.jpg'

/** First screen visitors see: name, role, short intro and main actions. */
export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col items-center gap-12 py-20 md:flex-row md:py-28"
    >
      <div className="flex flex-1 flex-col gap-5">
        <h2 className="text-accent text-sm font-semibold tracking-widest uppercase">
          {profile.role} <span className="font-bold">·</span> {profile.location}
        </h2>
        <h1 className="font-display text-5xl leading-tight font-bold tracking-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="text-muted max-w-xl text-lg">{profile.intro}</p>
        <div className="flex flex-wrap gap-3 md:gap-5 pt-2">
          <a
            href={profile.cvUrl}
            target='_blank'
            // text-background keeps the label readable on the accent in both themes.
            className="bg-accent text-background hover:bg-accent-hover inline-flex min-h-12 items-center gap-2 rounded-lg px-3 sm:px-5 py-2 font-bold transition-colors"
          >
            <Download size={18} aria-hidden="true" /> Download CV
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-accent inline-flex min-h-12 items-center gap-2 rounded-lg px-3 sm:px-5 py-2 font-bold  border-2 transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowUpRight size={18} aria-hidden="true" /> View Github
          </a>
        </div>
      </div>
      <img src={Photo} alt={`Portrait of ${profile.name}`} className="aspect-4/5 w-56 rounded-2xl border border-border object-cover md:w-64"/>
    </section>
  )
}
