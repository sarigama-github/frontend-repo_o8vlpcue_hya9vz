import { motion } from 'framer-motion'

export default function Projects() {
  const items = [
    {
      title: 'Sanierung Altbauwohnung',
      problem: 'Veraltete Elektrik, fehlende FI-Schutzschalter',
      solution: 'Komplett neue Verteilung, Leitungserneuerung, FI/LS installiert',
      result: 'Sichere Anlage, dokumentierter Befund, optisch saubere Installation',
      image: 'https://images.unsplash.com/photo-1762010231754-74e647a4631d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW5pZXJ1bmclMjBBbHRiYXV3b2hudW5nfGVufDB8MHx8fDE3NjMzNjkwNDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Bürobeleuchtung LED',
      problem: 'Dunkle Räume, hohe Energiekosten',
      solution: 'Lichtplanung, LED-Panels mit Bewegungsmeldern',
      result: 'Bis zu 60% weniger Verbrauch, bessere Ausleuchtung',
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Wallbox für Einfamilienhaus',
      problem: 'Keine Ladeinfrastruktur',
      solution: 'Lastmanagement, separate Absicherung, Montage & Inbetriebnahme',
      result: 'Sicheres und effizientes Laden des E-Autos',
      image: 'https://images.unsplash.com/photo-1739442493882-01a7af905b06?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYWxsYm94JTIwZiVDMyVCQ3IlMjBFaW5mYW1pbGllbmhhdXN8ZW58MHwwfHx8MTc2MzM2OTA0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section id="projekte" className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Projekte & Referenzen</h2>
          <p className="mt-2 text-slate-600">Ausgewählte Arbeiten – von Installation bis Smart Home.</p>
        </div>

        <div className="relative mt-10">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -top-6 h-20 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-xl"
            animate={{ x: ['-20%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          <div className="grid md:grid-cols-3 gap-6 relative">
            {items.map((p, i) => (
              <motion.article 
                key={p.title} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <motion.img 
                  src={p.image} alt={p.title} className="h-40 w-full object-cover"
                  whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li><span className="font-medium text-slate-800">Problem:</span> {p.problem}</li>
                    <li><span className="font-medium text-slate-800">Lösung:</span> {p.solution}</li>
                    <li><span className="font-medium text-slate-800">Ergebnis:</span> {p.result}</li>
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
