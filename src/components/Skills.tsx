import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'SQL', 'NoSQL', 'Bash', 'HTML', 'CSS'],
  frameworks: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'FastAPI', 'LangChain'],
  cloud: ['Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  other: ['PowerBI', 'Botpress', 'Copilot Studio', 'Power Automate', 'Burp Suite', 'vLLM', 'ChromaDB'],
}

const categoryColors: Record<keyof typeof skills, string> = {
  languages: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  frameworks: 'text-violet-400 border-violet-400/30 bg-violet-400/5',
  cloud: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  other: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
}

const headerColors: Record<keyof typeof skills, string> = {
  languages: 'text-cyan-400',
  frameworks: 'text-violet-400',
  cloud: 'text-blue-400',
  other: 'text-amber-400',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-28" style={{ background: '#0d0d10' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3"># skills</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.skills.title}</h2>
            <p className="text-zinc-500 text-lg">{t.skills.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {(Object.keys(skills) as (keyof typeof skills)[]).map((cat) => (
              <motion.div
                key={cat}
                variants={fadeUp}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-300"
              >
                <p className={`text-xs font-mono tracking-widest uppercase mb-4 font-semibold ${headerColors[cat]}`}>
                  {t.skills.categories[cat]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills[cat].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${categoryColors[cat]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
