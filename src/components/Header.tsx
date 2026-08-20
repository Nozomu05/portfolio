import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const NAV_IDS = ['about', 'skills', 'experience', 'education', 'projects', 'contact'] as const
type NavId = typeof NAV_IDS[number]

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const topBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const performScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        const headerHeight = topBarRef.current?.offsetHeight ?? 0
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }

    if (mobileOpen) {
      setMobileOpen(false)
      setTimeout(performScroll, 250)
    } else {
      performScroll()
    }
  }

  const navLabels: Record<NavId, string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    education: t.nav.education,
    projects: t.nav.projects,
    contact: t.nav.contact,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60' : ''
      }`}
    >
      <div ref={topBarRef} className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors font-mono"
        >
          <span className="text-cyan-400">&lt;</span>
          TMHA
          <span className="text-cyan-400">/&gt;</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {navLabels[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-zinc-900 border border-zinc-800 rounded-full p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                language === 'en'
                  ? 'bg-cyan-400 text-zinc-950'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                language === 'fr'
                  ? 'bg-cyan-400 text-zinc-950'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
          >
            <nav className="flex flex-col px-6 py-5 gap-5">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-zinc-400 hover:text-white transition-colors font-medium"
                >
                  {navLabels[id]}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
