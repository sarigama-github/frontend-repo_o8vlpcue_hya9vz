import { motion } from 'framer-motion'

export default function WhyUs() {
  const points = [
    { title: 'Zertifizierter Fachbetrieb', desc: 'Ausgebildete Elektriker mit Meistertitel und aktuellen Schulungen.' },
    { title: 'Transparente Angebote', desc: 'Klare Kostenvoranschläge – ohne versteckte Gebühren.' },
    { title: 'Schnell vor Ort', desc: 'Kurze Reaktionszeiten und Notdienst auf Anfrage.' },
    { title: 'Saubere Arbeit', desc: 'Ordentliche Verkabelung, dokumentierte Prüfungen, TÜV-geprüfte Qualität.' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Warum wir?</h2>
          <p className="mt-2 text-slate-600">Sicherheit, Qualität, Zuverlässigkeit – dafür stehen wir.</p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: '-80px' }} 
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {points.map((p, i) => (
            <motion.div 
              key={p.title} 
              className="bg-slate-50 border border-slate-200 rounded-xl p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
