import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen font-sans">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">
          <Hero />
          <section id="about" className="border-border border-t py-18">
            About
          </section>
          <section id="skills" className="border-border border-t py-18">
            Skills
          </section>
          <section id="projects" className="border-border border-t py-18">
            Projects
          </section>
          <section id="contact" className="border-border border-t py-18">
            Contact
          </section>
        </main>
      </div>
    </>
  )
}

export default App
