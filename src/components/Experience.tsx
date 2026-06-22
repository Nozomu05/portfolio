import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-28" style={{ background: '#09090b' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3"># experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.experience.title}</h2>
            <p className="text-zinc-500 text-lg">{t.experience.subtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-zinc-800" />

            <div className="space-y-10">
              {t.experience.items.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/40'
                        : 'bg-zinc-900 border-zinc-600'
                    }`}
                  />

                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                        <p className="text-zinc-500 text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-1 rounded-full">
                            {t.experience.present}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-zinc-400">
                          <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
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
