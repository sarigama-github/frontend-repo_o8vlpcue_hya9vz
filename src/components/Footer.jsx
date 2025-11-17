import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 py-10 mt-16 overflow-hidden">
      <motion.div 
        aria-hidden 
        className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" 
        animate={{ opacity: [0.3, 0.6, 0.3] }} 
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center"><span className="text-yellow-400 font-black">⚡</span></div>
              <span className="font-semibold text-white">Elektro Meisterbetrieb</span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-md">Ihr Partner für Elektroinstallationen, Reparaturen, Smart-Home und Beleuchtung. Qualität und Sicherheit seit über 10 Jahren.</p>
          </div>

          <nav>
            <h4 className="text-white font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#start" className="hover:text-white">Start</a></li>
              <li><a href="#leistungen" className="hover:text-white">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-white">Über uns</a></li>
              <li><a href="#projekte" className="hover:text-white">Projekte</a></li>
              <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
            </ul>
          </nav>

          <div>
            <h4 className="text-white font-semibold">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Telefon: +49 123 456 789</li>
              <li>E-Mail: kontakt@elektro-meister.de</li>
              <li>Öffnungszeiten: Mo–Fr 8–17 Uhr</li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">
              <a href="#" className="hover:text-white">Impressum</a> · <a href="#" className="hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Elektro Meisterbetrieb – Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  )
}
