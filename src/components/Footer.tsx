import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 py-8" style={{ background: '#09090b' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">
          © {year} Tran Minh Hoang Anh — {t.footer.rights}
        </p>
        <p className="text-zinc-700 text-xs font-mono">
          {t.footer.built_with}
        </p>
      </div>
    </footer>
  )
}
