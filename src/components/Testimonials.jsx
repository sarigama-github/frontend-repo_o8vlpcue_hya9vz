import { motion } from 'framer-motion'

export default function Testimonials() {
  const quotes = [
    { name: 'Familie Schneider', text: 'Schnell, freundlich und absolut sauber gearbeitet. Unsere neue Beleuchtung ist perfekt!' },
    { name: 'Büro am Park', text: 'Fehler im Verteiler zügig gefunden und behoben. Sehr professionell und transparent.' },
    { name: 'Hausverwaltung K.', text: 'Zuverlässiger Partner für Wartung und Notfälle. Klare Empfehlung.' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Kundenstimmen</h2>
        </div>
        <div className="relative mt-8">
          {/* subtle marquee highlight */}
          <motion.div 
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent blur-xl" 
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="grid md:grid-cols-3 gap-6 relative">
            {quotes.map((q, i) => (
              <motion.figure 
                key={q.name} 
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <blockquote className="text-slate-700">“{q.text}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">{q.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
