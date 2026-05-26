import { useState, useCallback } from 'react'

// ── Layout & global UI ────────────────────────────────────────────────────────
import LoadingScreen    from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor     from './components/CustomCursor'
import ScrollProgress   from './components/ScrollProgress'
import Navbar           from './components/Navbar'
import Footer           from './components/Footer'
import Chatbot          from './components/Chatbot'

// ── Sections ──────────────────────────────────────────────────────────────────
import Hero             from './components/Hero'
import About            from './components/About'
import Skills           from './components/Skills'
import Experience       from './components/Experience'
import Projects         from './components/Projects'
import { Certifications, Education } from './components/CertsAndEducation'
import Contact          from './components/Contact'

// ─── App ──────────────────────────────────────────────────────────────────────
// Root component. Add / remove / reorder sections here.
// All section data lives in /src/data — edit there, not here.

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      {/* Loading screen — hides after ~2s */}
      {!loaded && <LoadingScreen onComplete={onLoaded} />}

      {/* Global overlays (always rendered) */}
      <CustomCursor />
      <ScrollProgress />

      {/* Particle canvas — fixed behind everything */}
      <ParticleBackground />

      {/* Main site — fades in after loader */}
      <div
        className="relative"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <Footer />

        {/* Floating AI chatbot — fixed bottom-right */}
        <Chatbot />
      </div>
    </>
  )
}
