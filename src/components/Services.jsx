import { Bolt, Wrench, Home, ShieldCheck, Lightbulb, Gauge, Network, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bolt,
    title: 'Elektroinstallationen für Neubau & Sanierung',
    desc: 'Planung und fachgerechte Ausführung von Komplettinstallationen, Erweiterungen und Modernisierungen.',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVrdHJvaW5zdGFsbGF0aW9uZW4lMjBmJUMzJUJDciUyME5ldWJhdSUyMCUyNnxlbnwwfDB8fHwxNzYzMzY5MDQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    icon: Wrench,
    title: 'Fehlerdiagnose & Reparaturen',
    desc: 'Schnelle Störungsbehebung mit moderner Messtechnik. Sicher und nachhaltig repariert.',
    image: 'https://images.unsplash.com/photo-1682365114794-14b870355d21?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGZWhsZXJkaWFnbm9zZSUyMCUyNiUyMFJlcGFyYXR1cmVufGVufDB8MHx8fDE3NjMzNjkwNDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    icon: Home,
    title: 'Smart-Home-Lösungen',
    desc: 'Lichtsteuerung, Thermostate, Sicherheitssysteme – intelligent vernetzt und einfach bedienbar.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: ShieldCheck,
    title: 'E-Check / Elektrobefunde',
    desc: 'Geprüfte Sicherheit für Haus & Betrieb mit dokumentierten Prüfprotokollen.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Lightbulb,
    title: 'Beleuchtungsplanung & LED-Umrüstung',
    desc: 'Effiziente Lichtlösungen für Innen & Außen. Mehr Helligkeit, weniger Verbrauch.',
    image: 'https://images.unsplash.com/photo-1585996560148-48aa19e40da7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWxldWNodHVuZ3NwbGFudW5nJTIwJTI2JTIwTEVELVVtciVDMyVCQ3N0dW5nfGVufDB8MHx8fDE3NjMzNjkwNDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    icon: Gauge,
    title: 'Wallbox-Installation',
    desc: 'Ladeinfrastruktur für E-Mobilität – sicher geplant, normgerecht installiert.',
    image: 'https://images.unsplash.com/photo-1745393926629-76f943e190ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYWxsYm94LUluc3RhbGxhdGlvbnxlbnwwfDB8fHwxNzYzMzY5MDQ3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    icon: Network,
    title: 'Netzwerktechnik',
    desc: 'Strukturierte Verkabelung, Patchfelder, Switches – zuverlässig vernetzt.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Cpu,
    title: 'Schaltschrankbau',
    desc: 'Planung, Aufbau und Verdrahtung von Schaltschränken nach Norm.',
    image: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1600&auto=format&fit=crop',
  },
]

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' } }),
}

export default function Services() {
  return (
    <section id="leistungen" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Leistungen</h2>
          <p className="mt-2 text-slate-600">Präzise ausgeführt. Normgerecht dokumentiert. Auf Ihre Anforderungen abgestimmt.</p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc, image }, i) => (
            <motion.div 
              key={title} 
              variants={card} 
              custom={i}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-slate-900 text-yellow-400 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a href="#kontakt" className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-5 py-3 rounded-md shadow transition">
            Unverbindliches Angebot erhalten
          </a>
        </motion.div>
      </div>
    </section>
  )
}
