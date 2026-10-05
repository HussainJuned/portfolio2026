import { FiDownload } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import Photo from '../assests/photo.jpg'
import { FaGithub } from 'react-icons/fa'

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
        <div className="flex flex-wrap gap-3 pt-2 md:gap-5">
          <a
            href={profile.cvUrl}
            target="_blank"
            // text-background keeps the label readable on the accent in both themes.
            className="bg-accent text-background hover:bg-accent-hover inline-flex min-h-12 items-center gap-2 rounded-lg px-3 py-2 font-bold transition-colors sm:px-5"
          >
            <FiDownload size={18} aria-hidden="true" /> Download CV
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background text-forground hover:bg-foreground hover:text-background inline-flex min-h-12 items-center gap-2 rounded-lg border-2 px-3 py-2 font-bold transition-colors sm:px-5"
          >
            <FaGithub
              size={18}
              aria-hidden="true"
              // GitHub's mark is black on light and white on dark; flip with the hover background.
              className="text-foreground group-hover:text-background transition-colors"
            /> View Github
          </a>
        </div>
      </div>
      <img
        src={Photo}
        alt={`Portrait of ${profile.name}`}
        className="border-border aspect-4/5 w-56 rounded-2xl border object-cover md:w-64"
      />
    </section>
  )
}
