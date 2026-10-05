import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">
          <section id="top" className="py-24">
            Hero
          </section>
          <section
            id="about"
            className="border-t border-border py-18"
          >
            About
          </section>
          <section
            id="skills"
            className="border-t border-border py-18"
          >
            Skills
          </section>
          <section
            id="projects"
            className="border-t border-border py-18"
          >
            Projects
          </section>
          <section
            id="contact"
            className="border-t border-border py-18"
          >
            Contact
          </section>
        </main>
      </div>
    </>
  )
}

export default App
