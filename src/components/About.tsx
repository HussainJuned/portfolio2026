import { profile } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="border-border border-t py-18">
      <h2 className="font-display mb-6 text-3xl font-semibold">About</h2>
      <div className="text-muted flex max-w-2xl flex-col gap-4">
        {profile.about.map((paragraph, index) => (
          // Fixed text that never reorders, so the index is a safe key.
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
