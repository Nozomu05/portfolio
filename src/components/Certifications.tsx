import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-28" style={{ background: '#09090b' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3"># certifications</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.certifications.title}</h2>
            <p className="text-zinc-500 text-lg">{t.certifications.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.certifications.items.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 hover:border-emerald-400/40 transition-colors duration-300 flex flex-col"
              >
                <div className="p-2.5 bg-zinc-800 rounded-xl self-start mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>

                <h3 className="text-white font-bold text-lg leading-snug">{cert.name}</h3>
                <p className="text-emerald-400 font-medium text-sm mt-1">{cert.issuer}</p>
                <p className="text-zinc-500 text-xs mt-2">
                  {t.certifications.issued} {cert.issued} · {t.certifications.expires} {cert.expires}
                </p>
                {cert.credentialId && (
                  <p className="text-zinc-500 text-xs mt-1 font-mono break-all">
                    {t.certifications.credential_id}: {cert.credentialId}
                  </p>
                )}

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 self-start flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors duration-200 border border-zinc-800 hover:border-emerald-400/40 rounded-lg px-3 py-1.5"
                  >
                    {t.certifications.view_credential}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 3L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
