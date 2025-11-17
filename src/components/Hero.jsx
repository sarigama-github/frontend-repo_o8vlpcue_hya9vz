import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section id="start" ref={ref} className="relative pt-28 pb-16 sm:pb-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <motion.img
          style={{ y, opacity }}
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1920&auto=format&fit=crop"
          alt="Elektriker bei der Arbeit"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        {/* Electric beams */}
        <div className="absolute -top-24 right-1/4 h-64 w-64 blur-3xl rounded-full bg-yellow-300/20 animate-pulse" />
        <div className="absolute bottom-0 -left-10 h-72 w-72 blur-3xl rounded-full bg-cyan-300/20 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-semibold"
            >
              Zertifizierter Fachbetrieb
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Ihr zuverlässiger Elektriker für Installation, Reparatur & Sicherheit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-slate-600 text-lg"
            >
              Schnell vor Ort. Saubere Arbeit. Faire Preise. Wir planen, installieren und warten Elektrotechnik für Privat und Gewerbe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-5 py-3 rounded-md shadow transition">
                Jetzt Termin anfragen <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#leistungen" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-md shadow-sm transition">
                Leistungen ansehen
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              src="https://images.unsplash.com/photo-1581094478373-1d1940f22524?q=80&w=1600&auto=format&fit=crop"
              alt="Moderne Elektroinstallation"
              className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-lg border border-slate-200"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg shadow-md border border-slate-200"
            >
              <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">24/7</span> Notdienst auf Anfrage</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
