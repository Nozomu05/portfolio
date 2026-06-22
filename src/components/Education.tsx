import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-28" style={{ background: '#0d0d10' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3"># education</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.education.title}</h2>
            <p className="text-zinc-500 text-lg">{t.education.subtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-zinc-800" />

            <div className="space-y-8">
              {t.education.items.map((edu, i) => (
                <motion.div key={i} variants={fadeUp} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full bg-zinc-900 border-2 border-violet-500" />

                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-lg leading-snug">{edu.degree}</h3>
                        <p className="text-violet-400 font-medium text-sm mt-0.5">{edu.school}</p>
                        <p className="text-zinc-500 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mt-3 flex items-center gap-2">
                      <span className="text-violet-400">▸</span>
                      {edu.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
