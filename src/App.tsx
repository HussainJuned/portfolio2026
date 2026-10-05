import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <div className="min-h-screen bg-stone-50 font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">
          <section id="top" className="py-24">
            Hero
          </section>
          <section
            id="about"
            className="border-t border-stone-200 py-18 dark:border-neutral-800"
          >
            About
          </section>
          <section
            id="skills"
            className="border-t border-stone-200 py-18 dark:border-neutral-800"
          >
            Skills
          </section>
          <section
            id="projects"
            className="border-t border-stone-200 py-18 dark:border-neutral-800"
          >
            Projects
          </section>
          <section
            id="contact"
            className="border-t border-stone-200 py-18 dark:border-neutral-800"
          >
            Contact
          </section>
        </main>
      </div>
    </>
  )
}

export default App
